
import React from 'react';
import TodoList from '@/components/tools/TodoList';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TodoListPage = () => {
  const toolData = {
    title: "Todo List - Online Task Manager & Organizer",
    description: "Organize your tasks with our simple and efficient online todo list. Create, manage, and track your daily tasks, projects, and goals with due dates, priorities, and categories.",
    category: "Productivity Tools",
    
    howToUse: [
      "Add new tasks using the input field",
      "Set due dates and priority levels for tasks",
      "Organize tasks into categories or projects",
      "Mark tasks as complete when finished",
      "Use filters to view specific task groups"
    ],
    
    features: [
      "Create and manage unlimited tasks",
      "Set due dates and reminders",
      "Priority levels (High, Medium, Low)",
      "Task categories and tags",
      "Progress tracking and completion statistics",
      "Search and filter functionality",
      "Data saved locally in your browser",
      "Export task lists to various formats"
    ],
    
    faqs: [
      {
        question: "Are my tasks saved automatically?",
        answer: "Yes, your tasks are automatically saved in your browser's local storage. This means your tasks will persist between sessions, but they're only available on the device and browser you're using."
      },
      {
        question: "Can I set reminders for tasks?",
        answer: "Our tool supports due dates and priority levels. For browser notifications, you may need to enable permissions. Consider setting calendar reminders for important deadlines."
      },
      {
        question: "How can I organize tasks by project?",
        answer: "Use categories or tags to group related tasks together. You can create categories like 'Work', 'Personal', 'Shopping', etc., and filter tasks by category for better organization."
      },
      {
        question: "Can I export my task list?",
        answer: "Yes, you can export your tasks to formats like CSV, JSON, or plain text. This is useful for backing up your tasks or importing them into other productivity tools."
      }
    ],
    
    relatedTools: [
      { name: "Notes", href: "/notes", description: "Take and organize notes online" },
      { name: "Countdown Timer", href: "/countdown-timer", description: "Set timers for task deadlines" },
      { name: "Stopwatch", href: "/stopwatch", description: "Time your work sessions" },
      { name: "Calendar", href: "/calendar", description: "Schedule and plan your tasks" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<TodoList />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default TodoListPage;
