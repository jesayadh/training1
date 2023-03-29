import React, { useState } from "react";
import { Button } from "react-bootstrap";
import data from "@/data/data";
import AngkaCard from "@/components/angkacard";

export default function StatePage() {
  const [angka, SetAngka] = useState(0);
  const [dataArticle, SetDataArticle] = useState(data.dataArticle);
  return (
    <>
      <div>
        <h1>angka = {angka}</h1>
        <Button variant="success" onClick={() => SetAngka(angka + 1)}>
          + tambah angka
        </Button>
        <AngkaCard dataArticle={dataArticle} />
      </div>
    </>
  );
}
