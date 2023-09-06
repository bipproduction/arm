import { DetailViewDraftProject } from '@/modules/draft_project';
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
    <DetailViewDraftProject id={params.id} />
    </>
  );
}

