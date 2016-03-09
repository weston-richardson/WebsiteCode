
using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using MySql.Data.MySqlClient;




public partial class Page1 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        MySqlConnection dbConnection = new MySqlConnection("Server=sql5c6a.megaservers.com;Port=3306;Database=telephone_directory_wdr_therichardsonfamily_info;User=dbm.therichardsonfamily.info;Password=test123;Option=3;");
        try
        {
            dbConnection.Open();
            SqlCommand sqlCommand = new SqlCommand("DROP DATABASE telephone_directory_wdr_therichardsonfamily", dbConnection);
            sqlCommand.ExecuteNonQuery();
            SqlCommand sqlCommand2 = new SqlCommand("CREATE DATABASE telephone_directory_wdr_therichardsonfamily_info", dbConnection);
            sqlCommand2.ExecuteNonQuery();

        }
        catch (SqlException exception)
        {
            Response.Write("<p>Error code " + exception.Number + ": " + exception.Message + "</p>");
        }
        dbConnection.Close();

        try
        {
            dbConnection.Open();
            dbConnection.ChangeDatabase("telephone_directory_wdr_therichardsonfamily_info");
            SqlCommand sqlCommand = new SqlCommand("CREATE TABLE Telephone (first_name VARCHAR(20), last_name VARCHAR(20), Address VARCHAR(25), City VARCHAR(25), State VARCHAR(2), Zip INT, telephone_number VARCHAR(12))", dbConnection);
            sqlCommand.ExecuteNonQuery();
            SqlCommand sqlCommand2 = new SqlCommand("INSERT INTO Telephone VALUES('Micheal', 'Kennedy', '81 Straton Lane', 'Greenville', 'SC', '23765', '864-712-4448')", dbConnection);
            sqlCommand2.ExecuteNonQuery();
            SqlCommand sqlCommand3 = new SqlCommand("INSERT INTO Telephone VALUES('Kevin', 'Smith', '82 Straton Lane', 'Greenville', 'SC', '23765', '864-342-2345')", dbConnection);
            sqlCommand3.ExecuteNonQuery(); 
            SqlCommand sqlCommand4 = new SqlCommand("INSERT INTO Telephone VALUES('Jospeh', 'Donald', '83 Straton Lane', 'Greenville', 'SC', '23765', '864-232-4768')", dbConnection);
            sqlCommand4.ExecuteNonQuery();
            SqlCommand sqlCommand5 = new SqlCommand("INSERT INTO Telephone VALUES('Betty', 'White', '84 Straton Lane', 'Greenville', 'SC', '23765', '864-742-4567')", dbConnection);
            sqlCommand5.ExecuteNonQuery(); 
            SqlCommand sqlCommand6 = new SqlCommand("INSERT INTO Telephone VALUES('Bobby', 'Jones', '85 Straton Lane', 'Greenville', 'SC', '23765', '864-775-3456')", dbConnection);
            sqlCommand6.ExecuteNonQuery(); 
            SqlCommand sqlCommand7 = new SqlCommand("INSERT INTO Telephone VALUES('Terry', 'Webster', '86 Straton Lane', 'Greenville', 'SC', '23765', '864-754-9876')", dbConnection);
            sqlCommand7.ExecuteNonQuery(); 
            SqlCommand sqlCommand8 = new SqlCommand("INSERT INTO Telephone VALUES('Travis', 'Buck', '87 Straton Lane', 'Greenville', 'SC', '23765', '864-345-5566')", dbConnection);
            sqlCommand8.ExecuteNonQuery(); 
            SqlCommand sqlCommand9 = new SqlCommand("INSERT INTO Telephone VALUES('Faye', 'Osborn', '88 Straton Lane', 'Greenville', 'SC', '23765', '864-756-7439')", dbConnection);
            sqlCommand9.ExecuteNonQuery();
            SqlCommand sqlCommand10 = new SqlCommand("INSERT INTO Telephone VALUES('Brady', 'Johnson', '89 Straton Lane', 'Greenville', 'SC', '23765', '864-736-4008')", dbConnection);
            sqlCommand10.ExecuteNonQuery();
        }
        catch (SqlException exception)
        {
            Response.Write("<p>Error code " + exception.Number + ": " + exception.Message + "</p>");
        }
        dbConnection.Close();
    }
}
