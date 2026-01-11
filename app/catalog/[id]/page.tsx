import CamperDetailsView from '@/components/CamperDetails/CamperDetailsView';

export default async function CamperPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
 
  const { id } = await params;

  return <CamperDetailsView id={id} />;
}