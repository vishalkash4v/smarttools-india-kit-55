import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Plus, Trash2, Upload, Download, Printer, FileImage } from 'lucide-react';
import { toast } from 'sonner';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

interface UserInfo {
  companyName: string;
  address: string;
  email: string;
  phone: string;
  taxId: string;
  logo: string;
}

interface ClientInfo {
  name: string;
  email: string;
  address: string;
}

interface SavedProduct {
  description: string;
  unitPrice: number;
}

const InvoiceGenerator = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    companyName: '',
    address: '',
    email: '',
    phone: '',
    taxId: '',
    logo: ''
  });

  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: '',
    email: '',
    address: ''
  });

  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: '', quantity: 1, unitPrice: 0 }
  ]);

  const [savedProducts, setSavedProducts] = useState<SavedProduct[]>([]);
  const [savedClients, setSavedClients] = useState<ClientInfo[]>([]);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');
  const [taxRate, setTaxRate] = useState(18);
  const [paymentTerms, setPaymentTerms] = useState('Net 30');

  const invoiceRef = useRef<HTMLDivElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedUserInfo = localStorage.getItem('invoiceUserInfo');
    const savedProductsList = localStorage.getItem('invoiceSavedProducts');
    const savedClientsList = localStorage.getItem('invoiceSavedClients');
    
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
    }
    if (savedProductsList) {
      setSavedProducts(JSON.parse(savedProductsList));
    }
    if (savedClientsList) {
      setSavedClients(JSON.parse(savedClientsList));
    }

    // Generate invoice number
    const invoiceNum = `INV-${Date.now().toString().slice(-6)}`;
    setInvoiceNumber(invoiceNum);
  }, []);

  // Auto-save user info to localStorage
  useEffect(() => {
    if (userInfo.companyName || userInfo.email || userInfo.address) {
      localStorage.setItem('invoiceUserInfo', JSON.stringify(userInfo));
    }
  }, [userInfo]);

  // Auto-save products to localStorage
  useEffect(() => {
    if (savedProducts.length > 0) {
      localStorage.setItem('invoiceSavedProducts', JSON.stringify(savedProducts));
    }
  }, [savedProducts]);

  // Auto-save clients to localStorage
  useEffect(() => {
    if (savedClients.length > 0) {
      localStorage.setItem('invoiceSavedClients', JSON.stringify(savedClients));
    }
  }, [savedClients]);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUserInfo(prev => ({ ...prev, logo: result }));
        toast.success('Logo uploaded successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      unitPrice: 0
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleProductSuggestion = (itemId: string, description: string) => {
    const savedProduct = savedProducts.find(p => p.description === description);
    if (savedProduct) {
      updateItem(itemId, 'unitPrice', savedProduct.unitPrice);
    }
  };

  const saveProduct = (description: string, unitPrice: number) => {
    if (description && unitPrice > 0) {
      const existingProduct = savedProducts.find(p => p.description === description);
      if (!existingProduct) {
        setSavedProducts([...savedProducts, { description, unitPrice }]);
        toast.success('Product saved for future use!');
      }
    }
  };

  const saveClient = () => {
    if (clientInfo.name && clientInfo.email) {
      const existingClient = savedClients.find(c => c.email === clientInfo.email);
      if (!existingClient) {
        setSavedClients([...savedClients, clientInfo]);
        toast.success('Client saved for future use!');
      }
    }
  };

  const loadClient = (client: ClientInfo) => {
    setClientInfo(client);
    toast.success('Client details loaded!');
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * (taxRate / 100);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePDFDownload = async () => {
    if (!invoiceRef.current) return;

    try {
      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${invoiceNumber}.pdf`);
      toast.success('Invoice downloaded as PDF!');
    } catch (error) {
      toast.error('Failed to generate PDF');
    }
  };

  const handleImageDownload = async () => {
    if (!invoiceRef.current) return;

    try {
      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      const link = document.createElement('a');
      link.download = `${invoiceNumber}.png`;
      link.href = canvas.toDataURL();
      link.click();
      toast.success('Invoice downloaded as image!');
    } catch (error) {
      toast.error('Failed to generate image');
    }
  };

  return (
    <div className="w-full max-w-none space-y-6">
      {/* Control Panel */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* User Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Your Business Information
              <Button
                onClick={() => logoInputRef.current?.click()}
                variant="outline"
                size="sm"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Logo
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              ref={logoInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
            />
            
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={userInfo.companyName}
                onChange={(e) => setUserInfo(prev => ({ ...prev, companyName: e.target.value }))}
                placeholder="Your Company Name"
              />
            </div>
            
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                value={userInfo.address}
                onChange={(e) => setUserInfo(prev => ({ ...prev, address: e.target.value }))}
                placeholder="Company Address"
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="company@email.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Phone Number"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="taxId">Tax ID / GST Number</Label>
              <Input
                id="taxId"
                value={userInfo.taxId}
                onChange={(e) => setUserInfo(prev => ({ ...prev, taxId: e.target.value }))}
                placeholder="Tax ID Number"
              />
            </div>
          </CardContent>
        </Card>

        {/* Client Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Client Information
              <Button onClick={saveClient} variant="outline" size="sm">
                Save Client
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {savedClients.length > 0 && (
              <div>
                <Label>Saved Clients</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {savedClients.map((client, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => loadClient(client)}
                    >
                      {client.name}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <Label htmlFor="clientName">Client Name</Label>
              <Input
                id="clientName"
                value={clientInfo.name}
                onChange={(e) => setClientInfo(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Client Name"
              />
            </div>
            
            <div>
              <Label htmlFor="clientEmail">Client Email</Label>
              <Input
                id="clientEmail"
                type="email"
                value={clientInfo.email}
                onChange={(e) => setClientInfo(prev => ({ ...prev, email: e.target.value }))}
                placeholder="client@email.com"
              />
            </div>
            
            <div>
              <Label htmlFor="clientAddress">Client Address</Label>
              <Textarea
                id="clientAddress"
                value={clientInfo.address}
                onChange={(e) => setClientInfo(prev => ({ ...prev, address: e.target.value }))}
                placeholder="Client Address"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice Details */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div>
              <Label htmlFor="invoiceNumber">Invoice Number</Label>
              <Input
                id="invoiceNumber"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="invoiceDate">Invoice Date</Label>
              <Input
                id="invoiceDate"
                type="date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="taxRate">Tax Rate (%)</Label>
              <Input
                id="taxRate"
                type="number"
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Items */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Items</h3>
              <Button onClick={addItem} size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>

            {items.map((item) => (
              <div key={item.id} className="grid md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-5">
                  <Label>Description</Label>
                  <Input
                    value={item.description}
                    onChange={(e) => {
                      updateItem(item.id, 'description', e.target.value);
                      handleProductSuggestion(item.id, e.target.value);
                    }}
                    placeholder="Product/Service description"
                    list={`products-${item.id}`}
                  />
                  <datalist id={`products-${item.id}`}>
                    {savedProducts.map((product, index) => (
                      <option key={index} value={product.description} />
                    ))}
                  </datalist>
                </div>
                <div className="md:col-span-2">
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, 'quantity', Number(e.target.value))}
                    min="1"
                  />
                </div>
                <div className="md:col-span-3">
                  <Label>Unit Price</Label>
                  <Input
                    type="number"
                    value={item.unitPrice}
                    onChange={(e) => {
                      const price = Number(e.target.value);
                      updateItem(item.id, 'unitPrice', price);
                      saveProduct(item.description, price);
                    }}
                    step="0.01"
                    min="0"
                  />
                </div>
                <div className="md:col-span-1">
                  <Label>Total</Label>
                  <div className="p-2 text-right font-medium">
                    ${(item.quantity * item.unitPrice).toFixed(2)}
                  </div>
                </div>
                <div className="md:col-span-1">
                  <Button
                    onClick={() => removeItem(item.id)}
                    variant="outline"
                    size="sm"
                    disabled={items.length === 1}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Additional notes or comments"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="paymentTerms">Payment Terms</Label>
              <Input
                id="paymentTerms"
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value)}
                placeholder="e.g., Net 30, Due on receipt"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button onClick={handlePrint} variant="outline">
          <Printer className="w-4 h-4 mr-2" />
          Print
        </Button>
        <Button onClick={handlePDFDownload}>
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
        <Button onClick={handleImageDownload} variant="outline">
          <FileImage className="w-4 h-4 mr-2" />
          Download Image
        </Button>
      </div>

      {/* Invoice Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            ref={invoiceRef}
            className="bg-white text-black p-8 max-w-4xl mx-auto print:shadow-none shadow-lg"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                {userInfo.logo && (
                  <img
                    src={userInfo.logo}
                    alt="Company Logo"
                    className="w-20 h-20 object-contain"
                  />
                )}
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{userInfo.companyName || 'Your Company'}</h1>
                  <div className="text-sm text-gray-600 mt-2 whitespace-pre-line">
                    {userInfo.address}
                    {userInfo.email && <div>{userInfo.email}</div>}
                    {userInfo.phone && <div>{userInfo.phone}</div>}
                    {userInfo.taxId && <div>Tax ID: {userInfo.taxId}</div>}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h2 className="text-3xl font-bold text-gray-900">INVOICE</h2>
                <div className="text-sm text-gray-600 mt-2">
                  <div><strong>Invoice #:</strong> {invoiceNumber}</div>
                  <div><strong>Date:</strong> {new Date(invoiceDate).toLocaleDateString()}</div>
                  {dueDate && <div><strong>Due Date:</strong> {new Date(dueDate).toLocaleDateString()}</div>}
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Bill To */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bill To:</h3>
              <div className="text-gray-700">
                <div className="font-medium">{clientInfo.name || 'Client Name'}</div>
                <div>{clientInfo.email}</div>
                <div className="whitespace-pre-line">{clientInfo.address}</div>
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2 font-semibold">Description</th>
                    <th className="text-right py-2 font-semibold w-20">Qty</th>
                    <th className="text-right py-2 font-semibold w-24">Unit Price</th>
                    <th className="text-right py-2 font-semibold w-24">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200">
                      <td className="py-2">{item.description || 'Item description'}</td>
                      <td className="text-right py-2">{item.quantity}</td>
                      <td className="text-right py-2">${item.unitPrice.toFixed(2)}</td>
                      <td className="text-right py-2">${(item.quantity * item.unitPrice).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-8">
              <div className="w-64">
                <div className="flex justify-between py-1">
                  <span>Subtotal:</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Tax ({taxRate}%):</span>
                  <span>${calculateTax().toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between py-2 text-lg font-bold">
                  <span>Total:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="space-y-4 text-sm text-gray-600">
              {paymentTerms && (
                <div>
                  <strong>Payment Terms:</strong> {paymentTerms}
                </div>
              )}
              {notes && (
                <div>
                  <strong>Notes:</strong>
                  <div className="mt-1 whitespace-pre-line">{notes}</div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoiceGenerator;