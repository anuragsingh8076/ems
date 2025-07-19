const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Landing Page",
        "description": "Create a responsive landing page layout",
        "date": "2025-07-18",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Discuss project roadmap with the team",
        "date": "2025-07-17",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug Fix",
        "description": "Fix login validation issue",
        "date": "2025-07-16",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database Backup",
        "description": "Backup production database",
        "date": "2025-07-15",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Write Documentation",
        "description": "Document new API endpoints",
        "date": "2025-07-14",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review pull requests from team",
        "date": "2025-07-13",
        "category": "Code Review",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Client Feedback",
        "description": "Analyze and apply client feedback",
        "date": "2025-07-13",
        "category": "Client",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Optimize Images",
        "description": "Compress and optimize product images",
        "date": "2025-07-12",
        "category": "Performance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Perform internal security checks",
        "date": "2025-07-12",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Add Dark Mode",
        "description": "Implement dark mode feature in UI",
        "date": "2025-07-11",
        "category": "UI/UX",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "User Testing",
        "description": "Conduct usability tests with 5 users",
        "date": "2025-07-10",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Server Setup",
        "description": "Deploy new app to staging server",
        "date": "2025-07-09",
        "category": "Deployment",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Analytics Report",
        "description": "Prepare Google Analytics report",
        "date": "2025-07-08",
        "category": "Reporting",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Accessibility Fixes",
        "description": "Improve screen reader support",
        "date": "2025-07-07",
        "category": "UI/UX",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "SEO Improvements",
        "description": "Improve meta tags and page structure",
        "date": "2025-07-06",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Social Media Plan",
        "description": "Create a weekly post schedule",
        "date": "2025-07-06",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Login Flow",
        "description": "Redesign the login user flow",
        "date": "2025-07-05",
        "category": "UI/UX",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const data = localStorage.getItem('employees')

    console.log(data);
    
}