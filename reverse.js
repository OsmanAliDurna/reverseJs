const textStr = prompt("Enter a string: ");

document.write("Reverse of it : ");

for (let i = textStr.length - 1; i >= 0; i--) {
  document.write(textStr[i]);
}
