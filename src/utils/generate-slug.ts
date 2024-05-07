export const generateSlug = (text: string): string => {
  // Remove accents from the text
  const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Replace spaces and symbols with hyphens
  const slug = normalizedText
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

  return slug;
};

// Exemplo de uso:
const inputText =
  "Olá, mundo! Este é um exemplo de texto com acentos e símbolos.";
const outputSlug = generateSlug(inputText);
console.log(outputSlug); // Saída: "ola-mundo-este-e-um-exemplo-de-texto-com-acentos-e-simbolos"
