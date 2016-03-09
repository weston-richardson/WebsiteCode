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

public partial class Page3 : System.Web.UI.Page
{
    protected void confirmPhone_Click(Object Source, EventArgs E)
    {
        SqlConnection dbConnection = new SqlConnection("Data Source=.\\SQLEXPRESS; Integrated Security=true");
        if (Page.IsPostBack)
        {
            string first = firstName.Text;
            string last = lastName.Text;
            string addressIn = address.Text;
            string cityIn = city.Text;
            string stateIn = state.Text;
            string zipIn = zip.Text;
            string phoneIn = phone.Text;

            string phoneInfo = "INSERT INTO Telephone VALUES('" + first + "', '" + last + "', '" + addressIn + "', '" + cityIn + "', '" + stateIn + "', '" + zipIn + "', '" + phoneIn + "')";

      
            try
            {
                dbConnection.Open();
                dbConnection.ChangeDatabase("telephone_directory_wdr");
                SqlCommand sqlCommand = new SqlCommand(phoneInfo, dbConnection);
                sqlCommand.ExecuteNonQuery();
                Response.Write("<p>Successfully added a record.</p>");
            }
            catch (SqlException exception)
            {
                Response.Write("<p>Error code " + exception.Number + ": " + exception.Message + "</p>");
            }
            dbConnection.Close(); 
        } 
    }
}
