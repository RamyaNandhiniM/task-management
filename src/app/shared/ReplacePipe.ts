import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, originalChar: string, replaceChar: string) {
    return value.replace(originalChar, replaceChar);
  }

}