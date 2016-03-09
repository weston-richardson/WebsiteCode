<!-- 
Weston Richardson
CPT-239-W01
-->

<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Page3.aspx.cs" Inherits="Page3" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Add a Record</title>
</head>
<body>
    <form id="form1" runat="server">
        
        <p>First Name: <asp:TextBox ID="firstName" runat="server"></asp:TextBox> <br />
         Last Name: <asp:TextBox ID="lastName" runat="server"></asp:TextBox> <br />
        Address: <asp:TextBox ID="address" runat="server"></asp:TextBox> <br />
        City: <asp:TextBox ID="city" runat="server"></asp:TextBox> <br />
        State(XX): <asp:TextBox ID="state" runat="server"></asp:TextBox> <br />
        Zip Code: <asp:TextBox ID="zip" runat="server"></asp:TextBox> <br />
        Telephone Number: <asp:TextBox ID="phone" runat="server"></asp:TextBox></p>
        <asp:Button ID="confirmPhone" runat="server" Text="Button" OnClick="confirmPhone_Click" />
        <br />
        <p>Enter the new phone record and press the button.</p>
        <p>Go back to the Phone Directory page to see updates.</p>
        <br />
        <a href="Default.aspx">Click here to go back to the homepage.</a>
   </form>
</body>
</html>
