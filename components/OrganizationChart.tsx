"use client";

import { useEffect, useRef, useState } from "react";

const chartSource = "/organizasyon-semasi.png";

// OrganizationChart, şemayı mobilde yatay kaydırılabilir ve isteğe bağlı tam ekran incelenebilir sunar.
export default function OrganizationChart() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect, lightbox durumunu yerel dialog öğesiyle eş zamanlı tutar.
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // closeDialog, tüm kapatma hareketlerini tek noktadan yönetir.
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <div className="overflow-x-auto border border-outline-variant bg-white p-4 shadow-[0_24px_70px_rgba(7,19,49,0.08)] md:p-8">
        <button
          aria-label="AKYA Group organizasyon şemasını büyüt"
          className="block min-w-[900px] cursor-zoom-in md:min-w-0"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          <img
            alt="AKYA Group Organizasyon Şeması"
            className="block h-auto w-full max-w-[1400px]"
            src={chartSource}
          />
        </button>
      </div>

      <dialog
        aria-label="AKYA Group Organizasyon Şeması büyütülmüş görünümü"
        className="m-auto h-[94svh] w-[96vw] max-w-none overflow-auto bg-white p-4 backdrop:bg-deep-navy/90 md:p-8"
        onCancel={closeDialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
        onClose={() => setIsOpen(false)}
        ref={dialogRef}
      >
        <button
          aria-label="Organizasyon şemasını kapat"
          className="sticky left-full top-0 z-10 flex h-11 w-11 items-center justify-center border border-deep-navy bg-white text-2xl text-deep-navy"
          onClick={closeDialog}
          type="button"
        >
          ×
        </button>
        <img
          alt="AKYA Group Organizasyon Şeması"
          className="mx-auto mt-3 block h-auto min-w-[1100px] max-w-none md:min-w-[1400px]"
          src={chartSource}
        />
      </dialog>
    </>
  );
}
