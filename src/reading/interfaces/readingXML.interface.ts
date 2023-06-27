export interface ReadingXML {
  _declaration: Declaration;
  readings: Readings;
}

interface Declaration {
  _attributes: Attributes;
}

interface Attributes {
  version: string;
}

interface Readings {
  reading: Reading[];
}

interface Reading {
  _attributes: AttributesReading;
  _text: string;
}

interface AttributesReading {
  clientID: string;
  period: string;
}
