import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'sub',
        icon: 'feather icon-home',
        children: [
          {
            state: 'default',
            name: 'Default'
          },
          {
            state: 'ecommerce',
            name: 'Ecommerce'
          },
          {
            state: 'crm-dashboard',
            name: 'CRM'
          },
          {
            state: 'analytics',
            name: 'Analytics',
            badge: [
              {
                type: 'info',
                value: 'NEW'
              }
            ]
          },
          {
            state: 'project',
            name: 'Project'
          }
        ]
      },
      {
        state: 'navigation',
        short_label: 'N',
        name: 'Navigation',
        type: 'link',
        icon: 'feather icon-menu'
      },
      {
        state: 'widget',
        short_label: 'W',
        name: 'Widget',
        type: 'sub',
        icon: 'feather icon-layers',
        badge: [
          {
            type: 'danger',
            value: '100+'
          }
        ],
        children: [
          {
            state: 'statistic',
            name: 'Statistic'
          },
          {
            state: 'data',
            name: 'Data'
          },
          {
            state: 'chart',
            name: 'Chart'
          },
          {
            state: 'advanced',
            name: 'Advance'
          }
        ]
      }
    ],
  },
  {
    label: 'UI Element',
    main: [
      {
        state: 'basic',
        short_label: 'B',
        name: 'Basic',
        type: 'sub',
        icon: 'feather icon-box',
        children: [
          {
            state: 'alert',
            name: 'Alert'
          },
          {
            state: 'breadcrumb',
            name: 'Breadcrumbs'
          },
          {
            state: 'button',
            name: 'Button'
          },
          {
            state: 'box-shadow',
            name: 'Box-Shadow'
          },
          {
            state: 'accordion',
            name: 'Accordion'
          },
          {
            state: 'generic-class',
            name: 'Generic Class'
          },
          {
            state: 'tabs',
            name: 'Tabs'
          },
          {
            state: 'color',
            name: 'Color'
          },
          {
            state: 'label-badge',
            name: 'Label Badge'
          },
          {
            state: 'progressbar',
            name: 'Progressbar'
          },
          {
            state: 'pre-loader',
            name: 'Pre-Loader'
          },
          {
            state: 'list',
            name: 'List'
          },
          {
            state: 'tooltip',
            name: 'Tooltip & Popover'
          },
          {
            state: 'typography',
            name: 'Typography'
          },
          {
            state: 'other',
            name: 'Other'
          },
        ]
      },
      {
        state: 'advance',
        short_label: 'A',
        name: 'Advance',
        type: 'sub',
        icon: 'feather icon-gitlab',
        children: [
          {
            state: 'task-board',
            name: 'Task Board'
          },
          {
            state: 'grid-stack',
            name: 'Grid Stack'
          },
          {
            state: 'light-box',
            name: 'Light Box'
          },
          {
            state: 'modal',
            name: 'Modal'
          },
          {
            state: 'notifications',
            name: 'Notifications'
          },
          /*{
            state: 'notify',
            name: 'PNOTIFY',
            badge: [
              {
                type: 'info',
                value: 'New'
              }
            ]
          },*/
          {
            state: 'rating',
            name: 'Rating'
          },
          {
            state: 'range-slider',
            name: 'Range Slider'
          },
          {
            state: 'slider',
            name: 'Slider'
          },
          /*{
            state: 'tour',
            name: 'Tour'
          },*/
          {
            state: 'tree',
            name: 'Tree View'
          }
        ]
      },
      {
        state: 'animations',
        short_label: 'A',
        name: 'Animations',
        type: 'link',
        icon: 'feather icon-aperture rotate-refresh'
      }
    ]
  },
  {
    label: 'Forms',
    main: [
      {
        state: 'forms',
        short_label: 'F',
        name: 'Form',
        type: 'sub',
        icon: 'feather icon-clipboard',
        children: [
          {
            state: 'basic',
            name: 'Components'
          }, {
            state: 'add-on',
            name: 'Add-On'
          }, {
            state: 'advance',
            name: 'Advance'
          }, {
            state: 'validation',
            name: 'Validation'
          }
        ]
      },
      {
        state: 'picker',
        short_label: 'P',
        main_state: 'forms',
        name: 'Form Picker',
        type: 'link',
        icon: 'feather icon-edit-1'
      },
      {
        state: 'mask',
        short_label: 'M',
        main_state: 'forms',
        name: 'Form Mask',
        type: 'link',
        icon: 'feather icon-package',
        badge: [
          {
            type: 'warning',
            value: 'New'
          }
        ]
      },
      {
        state: 'select',
        short_label: 'S',
        main_state: 'forms',
        name: 'Form Select',
        type: 'link',
        icon: 'feather icon-feather'
      },
      {
        state: 'form-wizards',
        short_label: 'FW',
        main_state: 'forms',
        name: 'Form Wizard',
        type: 'link',
        icon: 'feather icon-tv'
      },
      {
        state: 'ngx',
        short_label: 'NFW',
        main_state: 'forms',
        name: 'NGX Form Wizard',
        type: 'link',
        icon: 'feather icon-list'
      }
    ]
  },
  {
    label: 'Tables',
    main: [
      {
        state: 'bootstrap-table',
        short_label: 'B',
        name: 'Bootstrap Table',
        type: 'sub',
        icon: 'feather icon-credit-card',
        children: [
          {
            state: 'basic',
            name: 'Basic Table'
          }, {
            state: 'sizing',
            name: 'Sizing Table'
          }, {
            state: 'border',
            name: 'Border Table'
          }, {
            state: 'styling',
            name: 'Styling Table'
          }
        ]
      },
      {
        state: 'data-table',
        short_label: 'D',
        name: 'Data Table',
        type: 'sub',
        icon: 'feather icon-inbox',
        children: [
          {
            state: 'basic',
            name: 'Basic Table'
          }, {
            state: 'editable',
            name: 'Editable'
          }, {
            state: 'row-details',
            name: 'Row Details Table'
          }, {
            state: 'paging',
            name: 'Paging Table'
          }, {
            state: 'selection',
            name: 'Selection Table'
          }, {
            state: 'other',
            name: 'Other'
          }
        ]
      }
    ]
  },
  {
    label: 'Chart And Map',
    main: [
      {
        state: 'charts',
        short_label: 'C',
        name: 'Charts',
        type: 'sub',
        icon: 'feather icon-pie-chart',
        children: [
          {
            state: 'google',
            name: 'Google'
          }, {
            state: 'chart-js',
            name: 'ChartJS'
          }, {
            state: 'radial',
            name: 'Radial'
          }, {
            state: 'c3-js',
            name: 'C3 JS'
          }
        ]
      },
      {
        state: 'map',
        short_label: 'M',
        name: 'Maps',
        type: 'sub',
        icon: 'feather icon-map',
        children: [
          {
            state: 'google',
            name: 'Google'
          }
        ]
      },
      {
        state: 'landing',
        short_label: 'L',
        name: 'Landing',
        type: 'link',
        icon: 'feather icon-navigation-2',
        target: true
      }
    ]
  },
  {
    label: 'Pages',
    main: [
      {
        state: 'auth',
        short_label: 'A',
        name: 'Authentication',
        type: 'sub',
        icon: 'feather icon-unlock',
        children: [
          {
            state: 'login',
            type: 'sub',
            name: 'Login Pages',
            children: [
              {
                state: 'simple',
                name: 'Simple',
                target: true
              }, {
                state: 'header-footer',
                name: 'Header & Footer',
                target: true
              }, {
                state: 'social',
                name: 'Social Icon',
                target: true
              }, {
                state: 'social-header-footer',
                name: 'Social Header & Footer',
                target: true
              }
            ]
          }, {
            state: 'registration',
            type: 'sub',
            name: 'Registration Pages',
            children: [
              {
                state: 'simple',
                name: 'Simple',
                target: true
              }, {
                state: 'header-footer',
                name: 'Header & Footer',
                target: true
              }, {
                state: 'social',
                name: 'Social',
                target: true
              }, {
                state: 'social-header-footer',
                name: 'Social Header & Footer',
                target: true
              }
            ]
          },
          {
            state: 'forgot',
            name: 'Forgot Password',
            target: true
          },
          {
            state: 'lock-screen',
            name: 'Lock Screen',
            target: true
          },
        ]
      },
      {
        state: 'maintenance',
        short_label: 'A',
        name: 'Maintenance',
        type: 'sub',
        icon: 'feather icon-sliders',
        children: [
          {
            state: 'error',
            short_label: 'A',
            name: 'Error Pages',
            type: 'sub',
            icon: 'feather icon-alert-triangle',
            children: [
              {
                state: '400',
                name: 'Error 400',
                target: true
              },
              {
                state: '403',
                name: 'Error 403',
                target: true
              },
              {
                state: '404',
                name: 'Error 404',
                target: true
              },
              {
                state: '500',
                name: 'Error 500',
                target: true
              },
              {
                state: '503',
                name: 'Error 503',
                target: true
              }
            ]
          },
          {
            state: 'coming-soon',
            short_label: 'CS',
            name: 'Coming Soon',
            type: 'link',
            icon: 'feather icon-upload-cloud',
            target: true
          },
          {
            state: 'offline-ui',
            name: 'Offline UI',
            target: true
          }
        ]
      },
      {
        state: 'user',
        short_label: 'U',
        name: 'User Profile',
        type: 'sub',
        icon: 'feather icon-users',
        children: [
          {
            state: 'profile',
            name: 'User Profile'
          }, {
            state: 'card',
            name: 'User Card'
          }
        ]
      },
      {
        state: 'email',
        short_label: 'E',
        name: 'Email',
        type: 'sub',
        icon: 'feather icon-mail',
        children: [
          {
            state: 'email-compose',
            name: 'Compose Email'
          }, {
            state: 'email-inbox',
            name: 'Inbox'
          }, {
            state: 'email-read',
            name: 'Read Mail'
          }, {
            state: 'email-template',
            name: 'Email Template',
            type: 'sub',
            children: [
              {
                state: 'email-welcome',
                name: 'Welcome Email',
                target: true
              },
              {
                state: 'email-reset-password',
                name: 'Reset Password',
                target: true
              },
              {
                state: 'email-newsletter',
                name: 'Newsletter Email',
                target: true
              },
              {
                state: 'app-launch',
                name: 'App Launch',
                target: true
              },
              {
                state: 'activation-code',
                name: 'Activation Code',
                target: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'App',
    main: [
      {
        state: 'crm-contact',
        name: 'CRM Contact',
        type: 'link',
        icon: 'feather icon-users'
      },
      {
        state: 'task',
        short_label: 'T',
        name: 'Task',
        type: 'sub',
        icon: 'feather icon-check-circle',
        children: [
          {
            state: 'list',
            name: 'Task List'
          }, {
            state: 'board',
            name: 'Task Board'
          }, {
            state: 'details',
            name: 'Task Details'
          }, {
            state: 'issue',
            name: 'Issue List'
          }
        ]
      }
    ]
  },
  {
    label: 'Extension',
    main: [
      {
        state: 'editor',
        name: 'Editor',
        type: 'sub',
        icon: 'feather icon-edit',
        children: [
          {
            state: 'quill-edit',
            name: 'Quill'
          }
        ]
      },
      {
        state: 'invoice',
        short_label: 'I',
        name: 'Invoice',
        type: 'sub',
        icon: 'feather icon-file-minus',
        children: [
          {
            state: 'basic',
            name: 'Invoice'
          }, {
            state: 'summary',
            name: 'Invoice Summary'
          }, {
            state: 'list',
            name: 'Invoice List'
          }
        ]
      },
      {
        state: 'file-upload-ui',
        short_label: 'F',
        name: 'File Upload',
        type: 'link',
        icon: 'feather icon-upload-cloud'
      },
      {
        state: 'calendar',
        short_label: 'EC',
        name: 'Event Calendar',
        type: 'link',
        icon: 'feather icon-calendar'
      }
    ]
  },
  {
    label: 'Other',
    main: [
      {
        state: '',
        short_label: 'M',
        name: 'Menu Levels',
        type: 'sub',
        icon: 'feather icon-list',
        children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          }, {
            state: '',
            name: 'Menu Level 2.3',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.4',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.4.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.4.2',
                target: true
              }
            ]
          }
        ]
      },
      {
        state: 'simple-page',
        short_label: 'S',
        name: 'Sample Page',
        type: 'link',
        icon: 'feather icon-watch'
      }
    ]
  },
  {
    label: 'Support',
    main: [
      {
        state: 'documentation',
        short_label: 'D',
        name: 'Documentation',
        external: 'http://docs.phoenixcoded.net/able-pro/angular/',
        type: 'external',
        icon: 'feather icon-monitor',
        target: true
      },
      {
        state: 'submit-issue',
        short_label: 'S',
        external: 'https://phoenixcoded.ticksy.com/',
        name: 'Need Support?',
        type: 'external',
        icon: 'feather icon-help-circle',
        target: true
      }
    ]
  }
];


@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
