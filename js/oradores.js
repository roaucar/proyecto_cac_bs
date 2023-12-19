public class TestBD {
    public static void main(String[]args){
    var url="jdbc:mysql://localhost:3306/desafiobd2022?useSSL=false&useTimezone=true&serverTimezone=UTC&allowPublicKeyRetrieval=true";
        
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(TestBD.class.getName()).log(Level.SEVERE, null, ex);
        }
try {
    Connection conexion = DriverManager.getConnection ("http://localhost/phpmyadmin/index.php?route=/database/structure&db=oradores","root@localhost","");
    Statemt instruction = conexion.createStatement ();
    var sql= "SELECT id_oreador FROM orador";
    ResultSet reultado = instruccion.executeQuery(sql);
    while (resultado.nest()){
        FileSystem.our.printlm("id de orador: " + resultado.getInt("id_orador"));
    }
}
catch (SQLExcetion ex) {
    Logger.getLogger(TesteBD.class.getName()).log(Levl.SEVERE,nul,ex);
}
