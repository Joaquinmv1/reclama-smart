'use client';
import { useSearchParams } from "next/navigation";
import {
  CamaraDeComercio,
  InnovaUlima,
  ParlamentoAndino,
  ProgramaUsil,
  Warmiventures
} from "./Alliance";
import { Alliance } from "./model/alliance.model";

const componentMappings = {
  'InnovaUlima': <InnovaUlima />,
  'ParlamentoAndino': <ParlamentoAndino />,
  'ProgramaUsil': <ProgramaUsil />,
  'Warmiventures': <Warmiventures />,
  'CamaraDeComercio': <CamaraDeComercio />
};

function Alliances() {
  const searchParams = useSearchParams();
  const search = searchParams.get('alliance');
  const selectedComponent = componentMappings[search as Alliance];

  return (
    <>
      <main>
        {selectedComponent}
      </main>
    </>
  )
}

export default Alliances;