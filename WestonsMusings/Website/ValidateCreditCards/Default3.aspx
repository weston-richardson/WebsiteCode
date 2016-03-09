<!-- 
    Weston Richardson
    CPT 239 W01
    02-19-12
 -->
 <%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default3.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Validate Credit Cards</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <p>This is an ASP program that validates credit card numbers.<br />Click the browser Back button to return to Musings.</p>
            <h1>
                Validate Credit Cards</h1>
            <p>
                Credit card:
                <asp:DropDownList ID="cardName" runat="server"> 
                    <asp:ListItem>American Express</asp:ListItem>
                    <asp:ListItem>Diners Club</asp:ListItem>
                    <asp:ListItem>Discover</asp:ListItem>
                    <asp:ListItem>JCB</asp:ListItem>
                    <asp:ListItem>Mastercard</asp:ListItem>
                    <asp:ListItem>Visa</asp:ListItem>
                </asp:DropDownList>
                <br />
                Number: 
                <asp:TextBox ID="cardNumber" runat="server" />
                <asp:RequiredFieldValidator ID="ccNumValidator" runat="server" ErrorMessage="Required field" ControlToValidate="cardNumber" />
            </p>
            <p>
                <asp:Button ID="validateCard" runat="server" Text="Validate" />
            </p>
            <p>
                <asp:Literal ID="ccResult" runat="server">
                </asp:Literal>
            </p>
    </div>
    </form>
</body>
</html>
