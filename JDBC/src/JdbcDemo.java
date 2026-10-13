import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcDemo {

    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String url = "jdbc:mysql://localhost:3306/jdbc_practice";
        String username = "root";
        String password = "saloni8585";
        Connection connection = DriverManager.getConnection(url, username, password);

        System.out.println("Connection successful!");
        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery("SELECT * FROM students");
        while (resultSet.next()) {
            int id = resultSet.getInt("id");
            String name = resultSet.getString("name");
            String branch = resultSet.getString("branch");

            System.out.println(
                    "ID: " + id + "\tName: " + name + "\tBranch: " + branch);
        }
        resultSet.close();
        statement.close();
        connection.close();

    }

}
