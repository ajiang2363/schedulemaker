angular.module('sm').factory('uiDayFactory', function () {
  const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return function () {
    return days
  }
})
