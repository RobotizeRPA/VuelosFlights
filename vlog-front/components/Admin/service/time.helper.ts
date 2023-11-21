export function convertDate(input: string): string {
    const dateArray = input.split(' ');

    // Mapear nombres de meses a números
    const months: { [key: string]: string } = {
      enero: '01', febrero: '02', marzo: '03', abril: '04', mayo: '05', junio: '06',
      julio: '07', agosto: '08', septiembre: '09', octubre: '10', noviembre: '11', diciembre: '12'
    };
  
    const day = dateArray[0];
    const monthName = dateArray[2].toLowerCase();
    const year = dateArray[4];
    const time = dateArray[5];
  
    const month = months[monthName];
  
    // Formatear la fecha en el nuevo formato
    const formattedDate = `${day}/${month}/${year} ${time}`;
  
    return formattedDate;
  }

 
export const getSections = (section: string) => {
  let allSection = ['deportes', 'clima', 'zodiaco', 'policial', 'politica','economia']
  allSection = allSection.filter(e => e != section)
  return allSection
}