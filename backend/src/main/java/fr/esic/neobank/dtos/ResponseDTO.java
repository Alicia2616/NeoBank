package fr.esic.neobank.dtos;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResponseDTO {

    private boolean succes;
    private String message;
    private Object data;

}
