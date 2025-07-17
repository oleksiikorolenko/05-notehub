import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '../../services/noteService';
import NoteList from '../NoteList/NoteList';
import Paginaition from '../Pagination/Pagination';
import SearchBox from '../SearchBox/SearchBox';
import Modal from '../Modal/Modal';
import NoteForm from '../NoteForm/NoteForm';
import { useDebouncedCallback } from 'use-debounce';
import './App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState('1');
  const [search, setSearch] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const debouncedSearch = useDebouncedCallback(setSearch, 300);





}


