import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import { 
  CollectionPreviewContainer, 
  TitleContainer, 
  PreviweContainer
} from './collection-preview.styles'

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{ title.toUpperCase() }</TitleContainer>
    <PreviweContainer>
      {
        items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </PreviweContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;