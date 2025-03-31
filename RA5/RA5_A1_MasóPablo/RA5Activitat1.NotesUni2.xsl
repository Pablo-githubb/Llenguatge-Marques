<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <style>
                table {border-collapse: collapse; border: 1px solid black; background-color: grey;}  
                th {text-align: left; font-weight: bold; padding: 8px; border: 1px solid black;}
                td {padding: 8px; border: 1px solid black; }
            </style>
            <xsl:apply-templates select="notes/assignatura"/>
        </html>
    </xsl:template>

    <xsl:template match="assignatura">
        <table>
            <caption><xsl:value-of select="nom_assignatura"/></caption>
            <xsl:for-each select="alumnes/alumne">
            <tr>
                <xsl:attribute name="style">
                    <xsl:if test="nota &lt; 5">background-color: red;</xsl:if>
                </xsl:attribute>
                
                <td><xsl:value-of select="nom"/></td>
                <td>
                    <xsl:value-of select="nota"/>
                </td>
            </tr>
            </xsl:for-each>
        </table>
    </xsl:template>

</xsl:stylesheet>