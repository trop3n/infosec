#include <stdlib.h>
#include <string.h>
/* memory.c */
  int _index = 5;                             // integer stored in data (initialized)
  char * str;                                 // string stored in bss (uninitialized)
  int nothing;                                // integer stored in bss (uninitialized)
void funct1(int c){                           // bracket starts function1 block with argument (c)
  int i=c;                                    // stored in the stack
  str = (char*) malloc (10 * sizeof (char));  // reserves 10 characters in the heap
  strncpy(str, "abcde", 5);                   // copies 5 characters "abcde" into str
}
void main (){                                 // the required main function
  funct1(1);                                  // main calls function1 with argument
}                                             // end of the main function