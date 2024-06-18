import pricingAi from '../assets/Icons/pricing-ai.svg'
import pricingBi from '../assets/Icons/pricing-bi.svg'
import pricingCb from '../assets/Icons/pricing-cb.svg'
import pricingLc from '../assets/Icons/pricing-lc.svg'
import pricingWa from '../assets/Icons/pricing-wa.svg'



export const questions = [
    {
      id: 1,
      question: 'Who are help desk agents?',
      answer: 'Support agents (help desk staff) who will be actively managing and responding to tickets raised by contacts.',
    },
    {
        id: 2,
        question: 'What are Categories?',
        answer: 'Categories allow you to separate incoming requests into dedicated ticket types that can be distributed to a specific team, have unique SLA requirements, and produce insightful metrics.',
      },
      {
        id: 3,
        question: 'How can I change my plan?',
        answer: 'You can upgrade your plan at any point in time. However, if you want to downgrade, you can do it at the end of the current billing cycle. You may also write to billing@happyfox.com or contact your Account Executive.',
      },
      {
        id: 4,
        question: 'Do you offer a trial?',
        answer: "Yes. We encourage you to request a demo to determine if HappyFox Help Desk is the right fit for your organization. Once we identify your needs, we'd be happy to provide access to a trial account where you can configure your proof of concept.",
      },
      {
        id: 5,
        question: 'Do you offer discounts for non-profits or educational institutes?',
        answer: "We offer a 10% discount on annual subscriptions on any plan.",
      },
      {
        id: 6,
        question: 'What are the available billing cycles?',
        answer: "We offer a monthly, annual, 2-year savings plan (paid upfront), and 3-year contract for agent-based pricing.",
      },
   
  ];
  export const products = [
    {
      id: 1,
      image: pricingLc,
      title: 'Live Chat',
      description: 'Chat with your customers instantly on mobile, desktop, and web.',
      trial: 'Start a free trial'
    },
    {
      id: 2,
      image: pricingCb,
      title: 'Chatbot',
      
      description: 'Engage and reach your customers 24x7 with ready-to-go chatbots.',
      trial: 'Get a demo'
    },

    {
        id: 3,
        image: pricingAi,
        title: 'Assist AI',
        
        description: 'Provide IT support directly from Slack and Microsoft Teams.',
        trial: 'Get a demo'
      },
      {
        id: 4,
        image: pricingBi,
        title: 'Business Intelligence',
        
        description: 'Turn insight into advantage with cross-functional reports & dashboards.',
        trial: 'Get a demo'
      },
      {
        id: 5,
        image: pricingWa,
        title: 'Workflow Automation',
        description: 'Reduce the grunt work with end-to-end process automation.',
        trial: 'Get a demo'
      },
  ];
  export const planData = [
    {
      plan: "Mighty",
      attachmentStore: "50 GB",
      ticketManagement: {
        'Unlimited Mailboxes': true,
        'Unlimited Categories': true,
        'Unlimited Tickets': true,
        'Customizable Statuses': true,
        'Customizable Priorities': true,
        'Ticket Custom Fields': true,
        'Custom Domain Mapping': true,
        'Multilingual Agent Portal': true,
        'Agent Collision': true,
        'Work Schedules': true,
        'Custom Roles and Permissions': true,
        'Ticket Tagging': true,
        'Email Notifications': true,
        'Bulk Editing': true,
        'Satisfaction Surveys': false,
        'Custom Ticket Queues': false,
        'Kanban view of tickets': false,
        'Proactive Agent Collision': false,
        'SLA Live Timer': false,
        'Task Management': false,
        'Asset Management': false,
        'Unlimited Assets': false,
        'Category Wise Statuses': false
      }
    },
    {
      plan: "Fantastic",
      attachmentStore: "500 GB",
      ticketManagement: {
        'Unlimited Mailboxes': true,
        'Unlimited Categories': true,
        'Unlimited Tickets': true,
        'Customizable Statuses': true,
        'Customizable Priorities': true,
        'Ticket Custom Fields': true,
        'Custom Domain Mapping': true,
        'Multilingual Agent Portal': true,
        'Agent Collision': true,
        'Work Schedules': true,
        'Custom Roles and Permissions': true,
        'Ticket Tagging': true,
        'Email Notifications': true,
        'Bulk Editing': true,
        'Satisfaction Surveys': true,
        'Custom Ticket Queues': true,
        'Kanban view of tickets': true,
        'Proactive Agent Collision': false,
        'SLA Live Timer': false,
        'Task Management': false,
        'Asset Management': false,
        'Unlimited Assets': false,
        'Category Wise Statuses': false
      }
    },
    {
      plan: "Enterprise",
      attachmentStore: "1 TB",
      ticketManagement: {
        'Unlimited Mailboxes': true,
        'Unlimited Categories': true,
        'Unlimited Tickets': true,
        'Customizable Statuses': true,
        'Customizable Priorities': true,
        'Ticket Custom Fields': true,
        'Custom Domain Mapping': true,
        'Multilingual Agent Portal': true,
        'Agent Collision': true,
        'Work Schedules': true,
        'Custom Roles and Permissions': true,
        'Ticket Tagging': true,
        'Email Notifications': true,
        'Bulk Editing': true,
        'Satisfaction Surveys': true,
        'Custom Ticket Queues': true,
        'Kanban view of tickets': true,
        'Proactive Agent Collision': true,
        'SLA Live Timer': true,
        'Task Management': true,
        'Asset Management': true,
        'Unlimited Assets': true,
        'Category Wise Statuses': false
      }
    },
    {
      plan: "Enterprise Plus",
      attachmentStore: "2 TB",
      ticketManagement: {
        'Unlimited Mailboxes': true,
        'Unlimited Categories': true,
        'Unlimited Tickets': true,
        'Customizable Statuses': true,
        'Customizable Priorities': true,
        'Ticket Custom Fields': true,
        'Custom Domain Mapping': true,
        'Multilingual Agent Portal': true,
        'Agent Collision': true,
        'Work Schedules': true,
        'Custom Roles and Permissions': true,
        'Ticket Tagging': true,
        'Email Notifications': true,
        'Bulk Editing': true,
        'Satisfaction Surveys': true,
        'Custom Ticket Queues': true,
        'Kanban view of tickets': true,
        'Proactive Agent Collision': true,
        'SLA Live Timer': true,
        'Task Management': true,
        'Asset Management': true,
        'Unlimited Assets': true,
        'Category Wise Statuses': true
      }
    }
  ];

  export const ticketManagementFeatures = [
    'Unlimited Mailboxes',
    'Unlimited Categories',
    'Unlimited Tickets',
    'Customizable Statuses',
    'Customizable Priorities',
    'Ticket Custom Fields',
    'Custom Domain Mapping',
    'Multilingual Agent Portal',
    'Agent Collision',
    'Work Schedules',
    'Custom Roles and Permissions',
    'Ticket Tagging',
    'Email Notifications',
    'Bulk Editing',
    'Satisfaction Surveys',
    'Custom Ticket Queues',
    'Kanban view of tickets',
    'Proactive Agent Collision',
    'SLA Live Timer',
    'Task Management',
    'Asset Management',
    'Unlimited Assets',
    'Category Wise Statuses'
  ];
  export  const pricingData = {
    Monthly: [
      {
        name: "Mighty",
        price: "39",
        savings: "",
        features: [
     
          "Omnichannel Ticket Creation",
          "SLA Management",
          "Knowledge Base",
          "SSO (GSuite/SAML/Azure)",
          "SSL Certificate Hosting",
          "Migration Assistance",
        ],
      },
      {
        name: "Fantastic",
        price: "59",
        savings: "",
        features: [
        
          "Everything in Mighty",
          "Multi-brand Helpdesk",
          "SLA Breach Notification",
          "Custom Ticket Queues",
          "24/7 Email Support",
          "Optional EU Data Center",
        ],
      },
      {
        name: "Enterprise",
        price: "79",
        savings: "",
        features: [
     
          "Everything in Fantastic",
          "Proactive Agent Collision",
          "Task Management",
          "Asset Management",
          "24/7 Email/Chat Support",
          "Uptime SLA",
        ],
      },
      {
        name: "Enterprise Plus",
        price: "99",
        savings: "",
        features: [
     
          "Everything in Enterprise",
          "Agent Scripting",
          "2 TB Attachment Store",
          "All-time Reporting History",
          "24/7 Email/Chat/Phone Support",
          "Customer Success Manager",
        ],
      },
    ],
    Annual: [
      {
        name: "Mighty",
        price: "29",
        savings: "25% Savings*",
        features: [

          "Omnichannel Ticket Creation",
          "SLA Management",
          "Knowledge Base",
          "SSO (GSuite/SAML/Azure)",
          "SSL Certificate Hosting",
          "Migration Assistance",
        ],
      },
      {
        name: "Fantastic",
        price: "49",
        savings: "16% Savings*",
        features: [
   
          "Everything in Mighty",
          "Multi-brand Helpdesk",
          "SLA Breach Notification",
          "Custom Ticket Queues",
          "24/7 Email Support",
          "Optional EU Data Center",
        ],
      },
      {
        name: "Enterprise",
        price: "69",
        savings: "12% Savings*",
        features: [
       
          "Everything in Fantastic",
          "Proactive Agent Collision",
          "Task Management",
          "Asset Management",
          "24/7 Email/Chat Support",
          "Uptime SLA",
        ],
      },
      {
        name: "Enterprise Plus",
        price: "89",
        savings: "10% Savings*",
        features: [

          "Everything in Enterprise",
          "Agent Scripting",
          "2 TB Attachment Store",
          "All-time Reporting History",
          "24/7 Email/Chat/Phone Support",
          "Customer Success Manager",
        ],
      },
    ],
    '2-Year Savings Plan': [
      {
        name: "Mighty",
        price: "26",
        savings: "33% Savings*",
        features: [
   
          "Omnichannel Ticket Creation",
          "SLA Management",
          "Knowledge Base",
          "SSO (GSuite/SAML/Azure)",
          "SSL Certificate Hosting",
          "Migration Assistance",
        ],
      },
      {
        name: "Fantastic",
        price: "39",
        savings: "34% Savings*",
        features: [
    
          "Everything in Mighty",
          "Multi-brand Helpdesk",
          "SLA Breach Notification",
          "Custom Ticket Queues",
          "24/7 Email Support",
          "Optional EU Data Center",
        ],
      },
      {
        name: "Enterprise",
        price: "52",
        savings: "34% Savings*",
        features: [
        
          "Everything in Fantastic",
          "Proactive Agent Collision",
          "Task Management",
          "Asset Management",
          "24/7 Email/Chat Support",
          "Uptime SLA",
        ],
      },
      {
        name: "Enterprise Plus",
        price: "64",
        savings: "35% Savings*",
        features: [
    
          "Everything in Enterprise",
          "Agent Scripting",
          "2 TB Attachment Store",
          "All-time Reporting History",
          "24/7 Email/Chat/Phone Support",
          "Customer Success Manager",
        ],
      },
    ],
    '3-Year Contract': [
      {
        name: "Mighty",
        price: "27",
        savings: "30% Savings*",
        features: [
  
          "Omnichannel Ticket Creation",
          "SLA Management",
          "Knowledge Base",
          "SSO (GSuite/SAML/Azure)",
          "SSL Certificate Hosting",
          "Migration Assistance",
        ],
      },
      {
        name: "Fantastic",
        price: "41",
        savings: "30% Savings*",
        features: [
    
          "Everything in Mighty",
          "Multi-brand Helpdesk",
          "SLA Breach Notification",
          "Custom Ticket Queues",
          "24/7 Email Support",
          "Optional EU Data Center",
        ],
      },
      {
        name: "Enterprise",
        price: "55",
        savings: "30% Savings*",
        features: [

          "Everything in Fantastic",
          "Proactive Agent Collision",
          "Task Management",
          "Asset Management",
          "24/7 Email/Chat Support",
          "Uptime SLA",
        ],
      },
      {
        name: "Enterprise Plus",
        price: "69",
        savings: "30% Savings*",
        features: [
      
          "Everything in Enterprise",
          "Agent Scripting",
          "2 TB Attachment Store",
          "All-time Reporting History",
          "24/7 Email/Chat/Phone Support",
          "Customer Success Manager",
        ],
      },
    ],
  };

  export const unlimitedAgentsData = {
    Annual: [
      {
        name: "Starter",
        price: "1,499",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "10,000 Tickets / year",
          "10 Custom Fields"
        ]
      },
      {
        name: "Growth",
        price: "1,999",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "20,000 Tickets / year",
          "20 Custom Fields"
        ]
      },
      {
        name: "Scale",
        price: "2,999",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "100,000 Tickets / year",
          "100 Custom Fields"
        ]
      },
      {
        name: "Scale Plus",
        price: "4,999",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "250,000 Tickets / year",
          "200 Custom Fields"
        ]
      }
    ],
    '2-Year Savings Plan': [
      {
        name: "Starter",
        price: "1,149",
        savings: "23% Savings*",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "10,000 Tickets / year",
          "10 Custom Fields"
        ]
      },
      {
        name: "Growth",
        price: "1,599",
        savings: "20% Savings*",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "20,000 Tickets / year",
          "20 Custom Fields"
        ]
      },
      {
        name: "Scale",
        price: "2,399",
        savings: "20% Savings*",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "100,000 Tickets / year",
          "100 Custom Fields"
        ]
      },
      {
        name: "Scale Plus",
        price: "3,999",
        savings: "20% Savings*",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "250,000 Tickets / year",
          "200 Custom Fields"
        ]
      }
    ],
    '3-Year Contract': [
      {
        name: "Starter",
        price: "1,299",
        savings: "13% Savings*",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "10,000 Tickets / year",
          "10 Custom Fields"
        ]
      },
      {
        name: "Growth",
        price: "1,729",
        savings: "13% Savings*",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "20,000 Tickets / year",
          "20 Custom Fields"
        ]
      },
      {
        name: "Scale",
        price: "2,609",
        savings: "13% Savings*",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "100,000 Tickets / year",
          "100 Custom Fields",
          "Most Popular"
        ]
      },
      {
        name: "Scale Plus",
        price: "4,329",
        savings: "13% Savings*",
        features: [
          "Saving compared to monthly pricing",
          "Unlimited Agents",
          "250,000 Tickets / year",
          "200 Custom Fields"
        ]
      }
    ]
  };
  