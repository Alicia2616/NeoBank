package fr.esic.neobank.dtos;

public class ResponseDTO {

    private boolean succes;
    private String message;
    private Object data;

    public ResponseDTO() {
    }


    public ResponseDTO(boolean succes, String message, Object data) {
        this.succes = succes;
        this.message = message;
        this.data = data;
    }

    public boolean isSucces() {
        return succes;
    }

    public void setSucces(boolean succes) {
        this.succes = succes;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "ResponseDTO{" +
                "succes=" + succes +
                ", message='" + message + '\'' +
                ", data=" + data +
                '}';
    }
}
