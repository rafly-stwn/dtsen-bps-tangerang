// Utility function untuk smooth scroll ke elemen tanpa mengubah hash di URL browser
export const scrollToSection = (e, targetId) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  
  const id = targetId.replace(/^#/, '');
  const element = document.getElementById(id);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
