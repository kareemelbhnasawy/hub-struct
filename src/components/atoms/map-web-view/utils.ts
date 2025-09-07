const generateMapUrl = (latitude: number, longitude: number) =>
  `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.001},${latitude - 0.001},${longitude + 0.001},${latitude + 0.001}&layer=mapnik&marker=${latitude},${longitude}`;

export { generateMapUrl };
