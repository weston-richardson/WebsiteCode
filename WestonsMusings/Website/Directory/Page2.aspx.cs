/*
Weston Richardson
CPT-239-W01
*/

using System.Data.SqlClient;
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

public partial class Page2 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        SqlConnection dbConnection = new SqlConnection("Data Source=.\\SQLEXPRESS; Integrated Security=true");

        try
        {
            dbConnection.Open();
            dbConnection.ChangeDatabase("telephone_directory_wdr");
            string SQLString = "SELECT * FROM Telephone ORDER BY last_name, first_name";
            SqlCommand teleCommand = new SqlCommand(SQLString, dbConnection);
            SqlDataReader teleRecords = teleCommand.ExecuteReader();
            if (teleRecords.Read())
            {
                Response.Write("<table width='100%' border='1'>");
                Response.Write("<tr><th>Last Name</th><th>First Name</th><th>Address</th><th>City</th><th>State</th><th>Zip</th><th>Telephone</th></tr>");
                do
                {
                    Response.Write("<tr>");
                    Response.Write("<td>" + teleRecords["last_name"] + "</td>");
                    Response.Write("<td>" + teleRecords["first_name"] + "</td>");
                    Response.Write("<td>" + teleRecords["Address"] + "</td>");
                    Response.Write("<td>" + teleRecords["City"] + "</td>");
                    Response.Write("<td>" + teleRecords["State"] + "</td>");
                    Response.Write("<td>" + teleRecords["Zip"] + "</td>");
                    Response.Write("<td>" + teleRecords["telephone_number"] + "</td>");
                    Response.Write("</tr>");
                } while (teleRecords.Read());
                Response.Write("</table>");
            }
            else
            {
                Response.Write("Your query returned no results.");
            }
            teleRecords.Close();
        }
        catch (SqlException exception)
        {
            Response.Write("<p>Error code " + exception.Number + ": " + exception.Message + "</p>");
        }
        dbConnection.Close();
    }
}
