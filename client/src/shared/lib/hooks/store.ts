import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState, TypedDispatch} from '@app/providers';

export const useAppDispatch: () => TypedDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
