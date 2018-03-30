import { environment } from 'environments/environment';


export const navigation = [
  {
    link: '/index',
    icon: 'icon-home',
    title: 'Home',
    class: 'home'
  },
  {
    icon: 'icon-devices_other',
    title: 'Devices',
    permissions: ['DEVICES::VIEW'],
    class: 'device',
    auth: true,
    children: [
      {
        link: '/devices/create',
        icon: 'icon-add',
        title: 'Create a device',
        permissions: ['DEVICES::VIEW'],
        auth: true,
        class: 'device-create'
      },
      {
        link: '/devices',
        icon: 'icon-devices_other',
        title: 'Devices List',
        permissions: ['DEVICES::VIEW'],
        auth: true,
        class: 'device-list'
      }
    ]
  },
  {
    icon: 'icon-location_searching',
    title: 'Locations',
    children: [
      {
        link: '/location/new',
        icon: 'icon-add',
        title: 'Create a location',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
        class: 'location-new'
      },
      {
        link: '/locations',
        icon: 'icon-list',
        title: 'View Locations',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
        class: 'location-list'
      },
    ]
  },
  {
    link: '/gallery',
    icon: 'icon-attach_file',
    title: 'Gallery',
    permissions: ['USERS::VIEW'],
    auth: true,
    class: 'gallery'
  },
  {
    link: '/settings',
    icon: 'icon-settings',
    title: 'Settings',
    class: 'settings',
    auth: true
  },
  {
    link: '/docs',
    icon: 'icon-help',
    title: 'documents',
    class: 'docs'
  },
  ! environment.production ? {
    link: '/experimental',
    icon: 'icon-help',
    title: 'Experimental',
    class: 'experimental'
  } : null,
  {
    link: '/login',
    icon: 'icon-power_settings_new',
    title: 'Logout',
    class: 'logout'
  }
];
