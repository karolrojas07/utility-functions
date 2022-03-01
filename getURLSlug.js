// Cambios en el remoto 
const URLSlug = (words) => (
  words
    .replace(/\s+/g, '-')
    .toLowerCase()
);

export default URLSlug;

// Cambios en el local 
