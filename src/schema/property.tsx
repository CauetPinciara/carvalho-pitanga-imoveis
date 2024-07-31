import CurrencyInput from "@/components/studio/moneyInput";
import { defineField, defineType } from "sanity";
/* eslint-disable react/no-children-prop */
export const property = defineType({
  name: "property",
  type: "document",
  title: "Imóvel",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Título",
    }),
    defineField({
      name: "active",
      type: "boolean",
      title: "Ativo",
      initialValue: true,
    }),
    defineField({
      name: "salePrice",
      type: "number",
      title: "Preço de Venda",
      components: {
        input: (props) => <CurrencyInput children={undefined} {...props} />,
      },
    }),
    defineField({
      name: "rentPrice",
      type: "number",
      title: "Preço de Aluguel",
      components: {
        input: (props) => <CurrencyInput children={undefined} {...props} />,
      },
    }),
    defineField({
      name: "area",
      type: "number",
      title: "Área (m²)",
    }),
    defineField({
      name: "bedrooms",
      type: "number",
      title: "Quartos",
    }),
    defineField({
      name: "suites",
      type: "number",
      title: "Suítes",
    }),
    defineField({
      name: "bathrooms",
      type: "number",
      title: "Banheiros",
    }),
    defineField({
      name: "parkingSpaces",
      type: "number",
      title: "Vagas de Estacionamento",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Descrição",
    }),
    defineField({
      name: "iptu",
      type: "number",
      title: "IPTU",
      components: {
        input: (props) => <CurrencyInput children={undefined} {...props} />,
      },
    }),
    defineField({
      name: "condoFee",
      type: "number",
      title: "Taxa de Condomínio",
      components: {
        input: (props) => <CurrencyInput children={undefined} {...props} />,
      },
    }),
    defineField({
      name: "furnished",
      type: "boolean",
      title: "Mobilhado",
      initialValue: false,
    }),
    defineField({
      name: "type",
      type: "string",
      title: "Tipo de Propriedade",
      options: {
        list: [
          { title: "Casa", value: "house" },
          { title: "Apartamento", value: "apartment" },
          { title: "Cobertura", value: "penthouse" },
          { title: "Comercial", value: "commercial" },
        ],
      },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Imagem Principal",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "gallery",
      type: "array",
      title: "Galeria",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "videos",
      type: "array",
      title: "Vídeos",
      of: [{ type: "url" }],
    }),
    defineField({
      name: "address",
      type: "object",
      title: "Endereço",
      fields: [
        defineField({ name: "line1", type: "string", title: "Linha 1" }),
        defineField({ name: "line2", type: "string", title: "Linha 2" }),
        defineField({ name: "district", type: "string", title: "Bairro" }),
        defineField({ name: "city", type: "string", title: "Cidade" }),
        defineField({ name: "state", type: "string", title: "Estado" }),
        defineField({ name: "zip", type: "string", title: "CEP" }),
        defineField({ name: "country", type: "string", title: "País" }),
        defineField({ name: "number", type: "string", title: "Número" }),
        defineField({
          name: "apartment",
          type: "string",
          title: "Apartamento",
        }),
      ],
    }),
    defineField({
      name: "capturedBy",
      type: "reference",
      title: "Captado Por",
      to: [{ type: "person" }],
    }),
  ],
});
/* eslint-enable react/no-children-prop */
