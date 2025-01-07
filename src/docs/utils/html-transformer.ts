export const removeMantineCoreHtmlTags = (code: string) => {
  return code.replace(/<@mantine\/core\/(\w+)/g, '<$1')
    .replace(/<\/@mantine\/core\/(\w+)/g, '</$1')
}
