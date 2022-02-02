.MODEL SMALL
.STACK 100H

.DATA
    STRING1 DB 'ENTER A STRING: $'
    STRING2 DB 'THE STRING IN REVERSE ORDER $'

.CODE
    MAIN PROC

        MOV AX, @DATA               ;INITIALIZATION OF DATA
        MOV DS, AX

        XOR CX, CX                  ;RESET CX TO 0

        MOV AH, 9                   ; PRINT A STRING
        LEA DX, STRING1
        INT 21H

        MOV AH, 1
        @INPUT:
        INT 21H

        CMP AL, 0DH                 ;COMPARE INPUT TO ENTER
        JE @PRINTSTRING2
        
        PUSH AX                     ; PUSH THE  DATA 
        INC CX
        JMP @INPUT


        @PRINTSTRING2:
        MOV AH, 9
        LEA DX, STRING2
        INT 21H

        MOV AH, 2
        @LOOP:
        POP DX              ;PRINT THE DATA FROM THE STACK
        INT 21H
        DEC CX
        JNZ @LOOP

        @EXIT:
            MOV AH, 4CH
            INT 21H

    MAIN ENDP
END MAIN