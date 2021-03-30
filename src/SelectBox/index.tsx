import React from 'react'
import { components, createFilter } from 'react-select'
import { FixedSizeList } from 'react-window'
import {
  Error,
  StyledControl,
  StyledIndicatorContainer,
  SelectContainer,
  StyledSelect,
  PlaceholderText,
  CheckmarkWrap,
  MobileStyledSelect,
  NoResults,
  StyledDescription,
  MobileSelectWrap,
  SuccessCheckmark
} from './SelectStyles'
import { IndicatorContainerProps } from 'react-select/src/components/containers'

export interface SelectProps {
  onChange: (option: Option) => void
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void
  value?: Option | null
  error?: string | boolean
  autoComplete?: string
  /** Text displayed inside the input field */
  label?: string
  /** Text displayed outside the input field; useful for long descriptions/labels */
  description?: string
  name?: string
  background?: string
  border?: string
  options?: Option[]
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void
  /** Indicates success by coloring the SelectBox's border green */
  success?: boolean
  useNativeSelectOnMobile?: boolean
  rowHeight?: number
  className?: string
  RTL?: boolean
  preventSearch?: boolean
}

export interface Option {
  label: string
  value: string | number
}

const SelectBox = (props: SelectProps) => {
  const isBrowser = typeof window !== 'undefined'

  if (isBrowser) {
    // @ts-ignore
    window.mobilecheck = function() {
      var check = false
      ;(function(a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true
        // @ts-ignore
      })(navigator.userAgent || navigator.vendor || window.opera)
      return check
    }
  }

  const CustomIndicator = (indicatorProps: IndicatorContainerProps<any>) => {
    return (
      <StyledIndicatorContainer useOffset={!!props.label}>
        <components.IndicatorsContainer {...indicatorProps} />
      </StyledIndicatorContainer>
    )
  }

  const ControlComponent = (controlProps: any) => (
    <StyledControl
      error={props.error}
      success={props.success}
      hasLabel={!!props.label}
    >
      <components.Control {...controlProps} />
      {props.label && (
        <PlaceholderText
          placeholderUp={controlProps.isFocused || controlProps.hasValue}
          error={props.error}
          success={props.success}
          RTL={controlProps.isRtl}
        >
          {props.label}
        </PlaceholderText>
      )}
    </StyledControl>
  )

  const MenuList = (menuListProps: any) => {
    const { children, maxHeight, getValue } = menuListProps
    const [value] = getValue()

    // If the search matches no results, exit
    if (!children.length) {
      return <NoResults>No results</NoResults>
    }

    const rowHeight = props.rowHeight ? props.rowHeight : 35
    const initialOffset = children.indexOf(value) * rowHeight
    const numOfRows = children.length
    const heightOfAllRows = numOfRows * rowHeight

    // Shrink drop-down window size when contents do not fill up maxHeight
    const normalizedMaxHeight =
      heightOfAllRows < maxHeight ? heightOfAllRows : maxHeight

    return (
      <FixedSizeList
        height={normalizedMaxHeight}
        itemCount={numOfRows}
        itemSize={rowHeight}
        initialScrollOffset={initialOffset}
        width={'auto'}
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </FixedSizeList>
    )
  }

  const onFocus = (event: React.FocusEvent<HTMLSelectElement>) => {
    const { onFocus } = props
    event.preventDefault()
    onFocus && onFocus(event)
  }

  const onBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    const { onBlur } = props
    onBlur && onBlur(event)
  }

  const mobileOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = props.options.find(o => o.value === e.target.value)
    props.onChange(option)
  }

  // @ts-ignore
  if (isBrowser && window.mobilecheck() && props.useNativeSelectOnMobile) {
    return (
      <div className={props.className} dir={props.RTL ? 'rtl' : 'ltr'}>
        {props.description && (
          <StyledDescription>{props.description}</StyledDescription>
        )}
        <SelectContainer>
          <MobileSelectWrap>
            <MobileStyledSelect
              {...props}
              onFocus={onFocus}
              onBlur={onBlur}
              value={props.value && props.value.value}
              onChange={mobileOnChange}
            >
              <option value="" disabled selected></option>
              {props.options.map(o => (
                <option
                  selected={props.value && o.value === props.value.value}
                  value={o.value}
                  key={o.value}
                >
                  {o.label}
                </option>
              ))}
            </MobileStyledSelect>
            {props.label && (
              <PlaceholderText
                placeholderUp={!!props.value}
                error={props.error}
                success={props.success}
                RTL={props.RTL}
              >
                {props.label}
              </PlaceholderText>
            )}
            {props.success && (
              <CheckmarkWrap RTL={props.RTL}>
                <SuccessCheckmark size={30} />
              </CheckmarkWrap>
            )}
            {props.error && <Error>{props.error}</Error>}
          </MobileSelectWrap>
        </SelectContainer>
      </div>
    )
  }

  return (
    <div className={props.className} dir={props.RTL ? 'rtl' : 'ltr'}>
      {props.description && (
        <StyledDescription>{props.description}</StyledDescription>
      )}
      <SelectContainer>
        <StyledSelect
          {...props}
          styles={{
            // Fixes the overlapping problem of the component
            menu: (provided: any) => ({ ...provided, zIndex: 99 })
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder=""
          filterOption={createFilter({ ignoreAccents: false })}
          components={{
            Control: ControlComponent,
            IndicatorSeparator: null,
            IndicatorsContainer: CustomIndicator,
            MenuList: MenuList
          }}
          isSearchable={!props.preventSearch}
          isRtl={props.RTL}
        />
        {props.success && (
          <CheckmarkWrap RTL={props.RTL}>
            <SuccessCheckmark size={30} />
          </CheckmarkWrap>
        )}
        {props.error && <Error>{props.error}</Error>}
      </SelectContainer>
    </div>
  )
}

export default SelectBox
