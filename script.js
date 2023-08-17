'Use strict';

//Update number of unread notifications
const unreadNotNum = document.getElementById('unread--num');
const updateNotNum = function () {
  unreadNotNum.textContent = document.querySelectorAll('.unread').length;
};
updateNotNum();

//Mark all notifications as read

const allRead = document.getElementById('read');
allRead.addEventListener('click', () => {
  const unread = Array.from(document.querySelectorAll('.unread'));
  unread.forEach((unr) => unr.classList.remove('unread'));

  updateNotNum();
});

//Mark notification read on click
const container = document.querySelector('.container');
container.addEventListener('click', (event) => {
  event.preventDefault();

  if (!event.target.closest('.notification')) return;
  const notification = event.target.closest('.notification');

  if (!notification.classList.contains('unread')) return;
  const unreadDot = notification.querySelector('.unread--dot');
  notification.classList.remove('unread');
  unreadDot.classList.add('hide--dot');

  updateNotNum();
});
