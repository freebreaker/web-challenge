
import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Skeleton,
  useColorModeValue,
  Flex,
  Image,
  SystemStyleObject,
} from '@chakra-ui/react';
import {
  AsyncSelect,
  OptionProps,
  chakraComponents,
  OptionBase,
  GroupBase,
} from 'chakra-react-select';
import { useLocalObservable } from 'mobx-react-lite';
import { useStore } from '../../testing-mobx/store-react';

interface dataType extends OptionBase {
  label: string;
  value: string;
  imgSrc: string;
  ibc?: {
    source_channel: string;
    dst_channel: string;
    source_denom: string;
  };
}

const SkeletonOptions = () => {
  return (
    <>
      <Flex justify="space-between" align="center" mb={{ base: 2, sm: 4 }}>
        <Flex align="center">
          <Skeleton
            w={{ base: 10, sm: 16 }}
            h={{ base: 10, sm: 16 }}
            mr={{ base: 2, sm: 4 }}
          />
          <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
        </Flex>
        {/* <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} /> */}
      </Flex>
      <Flex justify="space-between" align="center" mb={{ base: 2, sm: 4 }}>
        <Flex align="center">
          <Skeleton
            w={{ base: 10, sm: 16 }}
            h={{ base: 10, sm: 16 }}
            mr={{ base: 2, sm: 4 }}
          />
          <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
        </Flex>
        {/* <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} /> */}
      </Flex>
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Skeleton
            w={{ base: 10, sm: 16 }}
            h={{ base: 10, sm: 16 }}
            mr={{ base: 2, sm: 4 }}
          />
          <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
        </Flex>
        {/* <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} /> */}
      </Flex>
    </>
  );
};

interface ICoinChoose {
  chooseCoin: (chainId: string) => void
}

export default function ({ chooseCoin }: ICoinChoose) {
  const store = useStore()
  const { chains, loadChains } = useLocalObservable(() => store);

  const [data, setData] = useState<dataType[]>([]);
  const [selectedItem, setSelectedItem] = useState<dataType>();
  const [loading, setLoading] = useState(true);

  const customStyles = {
    menu: (provided: SystemStyleObject) => ({
      ...provided,
      maxH: 40,
      h: 'full',
      position: 'relative',
      mt: 4,
      mb: 0,
    }),
    menuList: (provided: SystemStyleObject) => ({
      ...provided,
      maxH: 40,
      bg: 'transparent',
      border: 'none',
      borderRadius: 'none',
      py: 0,
      pr: { base: 2, sm: 4 },
      // For Firefox
      scrollbarWidth: 'auto',
      scrollbarColor: useColorModeValue(
        'rgba(0,0,0,0.3) rgba(0,0,0,0.2)',
        'rgba(255,255,255,0.2) rgba(255,255,255,0.1)'
      ),
      // For Chrome and other browsers except Firefox
      '&::-webkit-scrollbar': {
        width: '18px',
        background: useColorModeValue(
          'rgba(160,160,160,0.1)',
          'rgba(255,255,255,0.1)'
        ),
        borderRadius: '4px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: useColorModeValue(
          'rgba(0,0,0,0.1)',
          'rgba(255,255,255,0.1)'
        ),
        borderRadius: '4px',
      },
    }),
    option: (provided: SystemStyleObject, state: { isSelected: boolean }) => ({
      ...provided,
      borderRadius: 'lg',
      bg: state.isSelected
        ? useColorModeValue('primary.100', 'primary.500')
        : 'transparent',
      color: 'inherit',
      _hover: {
        bg: state.isSelected
          ? useColorModeValue('primary.100', 'primary.500')
          : useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      },
      _disabled: {
        _hover: { bg: 'transparent' },
      },
    }),
  };
  const IndicatorSeparator = () => {
    return null;
  };
  const DropdownIndicator = () => {
    return null;
  };
  const CustomOption = ({
    children,
    ...props
  }: OptionProps<dataType, true, GroupBase<dataType>>) => {
    return (
      <chakraComponents.Option {...props}>
        <Flex id={props.data.value} align="center" w="full">
          <Flex align="center" flex={1} mr={2}>
            <Box
              minW={{ base: 12, sm: 16 }}
              minH={{ base: 12, sm: 16 }}
              maxW={{ base: 12, sm: 16 }}
              maxH={{ base: 12, sm: 16 }}
              w="full"
              h="full"
              mr={{ base: 3, sm: 4 }}
            >
              <Image src={props.data.imgSrc} />
            </Box>
            <Box>
              <Text
                fontSize={{ base: 'lg', sm: '2xl' }}
                fontWeight="bold"
                textAlign="start"
              >
                {children}
              </Text>
              <Text
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight="bold"
                textAlign="start"
                color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
              >
                {props.data.ibc?.source_channel}
              </Text>
            </Box>
          </Flex>
          {/* <Text
            fontSize={{ base: 'md', sm: 'xl' }}
            fontWeight="semibold"
            textAlign="end"
            wordBreak="break-word"
          >
            3.141595
          </Text> */}
        </Flex>
      </chakraComponents.Option>
    );
  };

  setTimeout(() => {
    setLoading(false);
  }, 500);


  useEffect(() => {
    loadChains()
  }, [])

  useEffect(() => {
    if (!loading && chains.length) {
      setData(chains.map((i) => ({
        label: i.chain_name,
        value: i.chain_id,
        imgSrc: i.imgSrc
      })))
    }
  }, [loading, chains]);

  useEffect(() => {
    if (selectedItem && selectedItem.value) {
      chooseCoin(selectedItem.value)
    }
  }, [selectedItem])

  return (
    <Box p={3}>
      {loading ? (
        <SkeletonOptions />
      ) : (
        <AsyncSelect
          placeholder="Search"
          chakraStyles={customStyles}
          isClearable={false}
          // isOptionDisabled={(option) => option.label === 'Ion'} // test option disabled
          blurInputOnSelect={true}
          controlShouldRenderValue={false}
          menuIsOpen={true}
          loadingMessage={() => <SkeletonOptions />}
          defaultOptions={data}
          value={selectedItem}
          loadOptions={(inputValue, callback) => {
            setTimeout(() => {
              const values = data.filter((option) =>
                option.label.toLowerCase().includes(inputValue.toLowerCase())
              );
              callback(values);
            }, 1000);
          }}
          onChange={(selectedOption) => {
            let value = {};
            value = { ...selectedOption };
            setSelectedItem(value as dataType);
          }}
          components={{
            DropdownIndicator,
            IndicatorSeparator,
            Option: CustomOption,
          }}
        />
      )}
    </Box>
  );
}
