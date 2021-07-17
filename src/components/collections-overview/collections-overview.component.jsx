import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsFroPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collection-overview.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {
      collections.map(({id, ...otherCollectionsProps}) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))
    }
  </CollectionsOverviewContainer>
);


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsFroPreview
});

export default connect(mapStateToProps)(CollectionsOverview);