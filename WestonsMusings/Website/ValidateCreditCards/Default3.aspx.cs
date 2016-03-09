using System;
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
using System.Text.RegularExpressions;


public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Page.IsPostBack)
        {
            Page.Validate();
            if (Page.IsValid)
            {
                if (cardName.SelectedItem.Value == "American Express")
                {
                    Regex urlProtocol = new Regex(@"^3[47][0-9]{13}$");
                    Match regExMatch = urlProtocol.Match(Convert.ToString(cardNumber.Text));
                    if (regExMatch.Success)
                        ccResult.Text = "***Valid credit card number***";
                    else
                        ccResult.Text = "Invalid credit card number";
                }
                else if (cardName.SelectedItem.Value == "Diners Club")
                {
                    Regex urlProtocol = new Regex(@"^3(?:0[0-5]|[68][0-9])[0-9]{11}$");
                    Match regExMatch = urlProtocol.Match(Convert.ToString(cardNumber.Text));
                    if (regExMatch.Success)
                        ccResult.Text = "***Valid credit card number***";
                    else
                        ccResult.Text = "Invalid credit card number";
                }
                else if (cardName.SelectedItem.Value == "Discover")
                {
                    Regex urlProtocol = new Regex(@"^6(?:011|5[0-9]{2})[0-9]{12}$");
                    Match regExMatch = urlProtocol.Match(Convert.ToString(cardNumber.Text));
                    if (regExMatch.Success)
                        ccResult.Text = "***Valid credit card number***";
                    else
                        ccResult.Text = "Invalid credit card number";
                }
                else if (cardName.SelectedItem.Value == "JCB")
                {
                    Regex urlProtocol = new Regex(@"^(?:2131|1800|35\d{3})\d{11}$");
                    Match regExMatch = urlProtocol.Match(Convert.ToString(cardNumber.Text));
                    if (regExMatch.Success)
                        ccResult.Text = "***Valid credit card number***";
                    else
                        ccResult.Text = "Invalid credit card number";
                }
                else if (cardName.SelectedItem.Value == "Mastercard")
                {
                    Regex urlProtocol = new Regex(@"^5[1-5][0-9]{14}$");
                    Match regExMatch = urlProtocol.Match(Convert.ToString(cardNumber.Text));
                    if (regExMatch.Success)
                        ccResult.Text = "***Valid credit card number***";
                    else
                        ccResult.Text = "Invalid credit card number";
                }
                else if (cardName.SelectedItem.Value == "Visa")
                {
                    Regex urlProtocol = new Regex(@"^4[0-9]{12}(?:[0-9]{3})?$");
                    Match regExMatch = urlProtocol.Match(Convert.ToString(cardNumber.Text));
                    if (regExMatch.Success)
                        ccResult.Text = "***Valid credit card number***";
                    else
                        ccResult.Text = "Invalid credit card number";
                }
            }
        }
    }
}
