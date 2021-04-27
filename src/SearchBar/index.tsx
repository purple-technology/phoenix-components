import { Suggest } from '@blueprintjs/select'
import { MenuItem } from '@blueprintjs/core'
import React from 'react'

export type PopOverItem = {
  link: string
  title: string
}

export interface SearchBarProps {
  items: PopOverItem[]
  noResults?: string
  onQueryChange?: (query: string) => void
}

const SearchBar = (props: SearchBarProps) => {
  const renderInputValue = (item: PopOverItem) => item.title

  const handleItemChange = (item: PopOverItem) => {
    console.log('value: ', item)
  }

  const onQueryChange = (query: string) => {
    if (query.length >= 3) {
      props.onQueryChange(query)
    }
  }

  return (
    <Suggest
      inputValueRenderer={renderInputValue}
      itemRenderer={(item, i) => (
        <MenuItem
          icon="user"
          key={`item_${item.title}_${i}`}
          text={item.title}
          href={item.link}
        />
      )}
      items={props.items}
      noResults={
        <MenuItem disabled={true} text={props.noResults || 'No results.'} />
      }
      onItemSelect={handleItemChange}
      onQueryChange={onQueryChange}
      popoverProps={{ minimal: true }}
      inputProps={{ type: 'search', large: true, leftIcon: 'search' }}
    />
  )
}

export default SearchBar
