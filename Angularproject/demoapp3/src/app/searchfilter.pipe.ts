import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from './Booking';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(bookings: Booking[], searchValue: string): Booking[] {
    if(!bookings || !searchValue){
      return bookings;

    }
    return bookings.filter(booking =>
      booking.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      booking.author.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      booking.year.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      
      );
  }

}
