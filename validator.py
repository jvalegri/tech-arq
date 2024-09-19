from lxml import etree

def validar_xml_com_dtd(cursos3, cursos):
    # Parsing do DTD
    dtd = etree.DTD(open(cursos))

    # Parsing do XML
    xml_tree = etree.parse(cursos3)

    # Validar o XML em relação ao DTD
    if dtd.validate(xml_tree):
        print("O XML é válido em relação ao DTD.")
    else:
        print("O XML não é válido em relação ao DTD.")
        print(dtd.error_log)

validar_xml_com_dtd('cursos3.xml', 'cursos.dtd')
