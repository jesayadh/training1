import React, { useState } from "react";
import { Button } from "react-bootstrap";
import data from "@/data/data";
import AngkaCard from "@/components/angkacard";

export default function StatePage() {
  const [angka, setAngka] = useState(0);
  const [dataArticle, setDataArticle] = useState(data.dataArticle);

  const tambahDataArticle = () => {
    setDataArticle([
      ...dataArticle,
      {
        url: "https://plus.unsplash.com/premium_photo-1666262369867-6e521a979afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
        title: "title3",
        id: 3,
        text: "text3",
        footer: "footer3",
      },
    ]);
  };

  return (
    <>
      <div>
        <h1>angka = {angka}</h1>
        <Button variant="success" onClick={() => setAngka(angka + 1)}>
          + tambah angka
        </Button>
        <Button variant="primary" onClick={tambahDataArticle}>
          + tambah data article
        </Button>
        <AngkaCard dataArticle={dataArticle} />
      </div>
    </>
  );
}
