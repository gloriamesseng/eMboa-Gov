import { Metadata } from 'next';
import MboaGovFiscal from './MboaGovFiscal';

export const metadata: Metadata = {
  title: 'MboaGov Fiscal - Assistant Fiscal National au Cameroun',
  description: 'Posez vos questions, accédez à vos informations fiscales et simplifiez toutes vos démarches administratives avec votre assistant fiscal intelligent.',
  keywords: ['fiscalité', 'Cameroun', 'impôts', 'DGI', 'assistant fiscal', 'MboaGov'],
};

export default function Page() {
  return <MboaGovFiscal />;
}
