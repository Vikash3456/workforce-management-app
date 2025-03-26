// localStorage.clear();
const admin = [
    { 
      "id": 1,
      "email": "admin@me.com",
      "password": "123"
    }
  ];
  
  const employees = [
    {
      id: 1,
      firstName: "Aarav",
      email: "e@e.com",
      password: "123",
      taskNo: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Update Software",
          taskDescription: "Ensure all systems are updated to the latest version.",
          taskDate: "2024-12-10",
          category: "Maintenance"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Create Presentation",
          taskDescription: "Prepare slides for the client meeting next week.",
          taskDate: "2024-12-15",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Submit Report",
          taskDescription: "Send the quarterly report to the finance team.",
          taskDate: "2024-11-30",
          category: "Reporting"
        }
      ]
    },
    {
      id: 2,
      firstName: "Ishita",
      email: "employee2@example.com",
      password: "123",
      taskNo: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Conduct Training",
          taskDescription: "Organize a training session on cybersecurity.",
          taskDate: "2024-12-12",
          category: "Education"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Team Meeting",
          taskDescription: "Lead the weekly team standup.",
          taskDate: "2024-12-05",
          category: "Teamwork"
        }
      ]
    },
    {
      id: 3,
      firstName: "Kartik",
      email: "employee3@example.com",
      password: "123",
      taskNo: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Client Feedback",
          taskDescription: "Review feedback from the last project.",
          taskDate: "2024-12-01",
          category: "Analysis"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Prepare Budget",
          taskDescription: "Draft a budget proposal for Q1 2025.",
          taskDate: "2024-12-14",
          category: "Planning"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Market Research",
          taskDescription: "Study trends in AI technologies.",
          taskDate: "2024-12-18",
          category: "Research"
        }
      ]
    },
    {
      id: 4,
      firstName: "Priya",
      email: "employee4@example.com",
      password: "123",
      taskNo: {
        active: 1,
        newTask: 0,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "System Backup",
          taskDescription: "Ensure backups are scheduled and verified.",
          taskDate: "2024-12-10",
          category: "IT Support"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Bug Fixes",
          taskDescription: "Resolve reported issues in the internal software.",
          taskDate: "2024-12-02",
          category: "Development"
        }
      ]
    },
    {
      id: 5,
      firstName: "Vihan",
      email: "employee5@example.com",
      password: "123",
      taskNo: {
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 1
      },
      tasks: [
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Deliver Presentation",
          taskDescription: "Present project roadmap to stakeholders.",
          taskDate: "2024-12-08",
          category: "Communication"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Social Media Campaign",
          taskDescription: "Plan content for the upcoming holiday campaign.",
          taskDate: "2024-12-13",
          category: "Marketing"
        }
      ]
    }
  ];
  
  
  export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
  // console.log("Local storage set:", { employees, admin });
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const Admin = JSON.parse(localStorage.getItem('admin'));
  // console.log("Local storage retrieved:", { employees, admin });
  return {employees, Admin };
}