<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="notes">
  <xsl:apply-templates select="assignatura"/>
</xsl:template>

<xsl:template match="assignatura">
  <xsl:value-of select="nom_assignatura"/>
   <xsl:text>&#10;------------------------------&#10;</xsl:text>
<xsl:apply-templates select="alumnes/alumne"/>
<xsl:text>&#10;</xsl:text>
</xsl:template>


<xsl:template match="alumne">
  <xsl:value-of select="nom"/>
  <xsl:text> -- </xsl:text>
  <xsl:value-of select="nota"/>
  <xsl:text>&#10;</xsl:text>
 </xsl:template>


</xsl:stylesheet>
