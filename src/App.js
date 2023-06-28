import './App.css';
import { useState } from'react';

const tracks = [{
    "track": "porttitor pede",
    "artist": "ut erat",
    "album": "sapien cursus vestibulum",
    "id": 1
  }, {
    "track": "tincidunt eget tempus vel",
    "artist": "sapien quis libero nullam",
    "album": "pulvinar sed nisl nunc",
    "id": 2
  }, {
    "track": "hendrerit at",
    "artist": "volutpat sapien",
    "album": "sed interdum venenatis turpis",
    "id": 3
  }, {
    "track": "justo in hac habitasse",
    "artist": "tincidunt eu felis",
    "album": "sem sed sagittis nam",
    "id": 4
  }, {
    "track": "bibendum imperdiet nullam",
    "artist": "pellentesque eget nunc",
    "album": "hac habitasse",
    "id": 5
  }, {
    "track": "commodo vulputate justo in",
    "artist": "quam a odio in",
    "album": "diam id ornare imperdiet sapien",
    "id": 6
  }, {
    "track": "eleifend pede libero quis orci",
    "artist": "dignissim vestibulum vestibulum ante ipsum",
    "album": "sapien urna pretium",
    "id": 7
  }, {
    "track": "in congue etiam",
    "artist": "varius nulla facilisi cras non",
    "album": "erat volutpat in congue etiam",
    "id": 8
  }, {
    "track": "adipiscing lorem vitae mattis",
    "artist": "consectetuer adipiscing elit",
    "album": "rhoncus sed vestibulum",
    "id": 9
  }, {
    "track": "bibendum felis sed interdum venenatis",
    "artist": "sit amet erat",
    "album": "ridiculus mus",
    "id": 10
  }, {
    "track": "leo odio condimentum",
    "artist": "augue aliquam erat",
    "album": "varius nulla",
    "id": 11
  }, {
    "track": "primis in faucibus orci luctus",
    "artist": "bibendum imperdiet nullam orci pede",
    "album": "luctus cum sociis natoque penatibus",
    "id": 12
  }, {
    "track": "praesent lectus vestibulum quam sapien",
    "artist": "ut blandit non",
    "album": "vel augue",
    "id": 13
  }, {
    "track": "sed accumsan felis ut",
    "artist": "est risus auctor sed tristique",
    "album": "ipsum primis in faucibus",
    "id": 14
  }, {
    "track": "sapien iaculis congue",
    "artist": "nullam orci pede",
    "album": "suspendisse ornare consequat",
    "id": 15
  }, {
    "track": "sapien urna pretium nisl",
    "artist": "viverra pede ac diam",
    "album": "vestibulum sed magna",
    "id": 16
  }, {
    "track": "sem praesent id massa id",
    "artist": "tempus sit amet",
    "album": "volutpat dui maecenas tristique",
    "id": 17
  }, {
    "track": "dis parturient",
    "artist": "non velit donec",
    "album": "lorem ipsum dolor sit",
    "id": 18
  }, {
    "track": "quis lectus suspendisse potenti in",
    "artist": "nunc vestibulum ante",
    "album": "quis augue luctus tincidunt",
    "id": 19
  }, {
    "track": "magnis dis parturient",
    "artist": "in hac habitasse platea",
    "album": "integer ac leo pellentesque ultrices",
    "id": 20
  }, {
    "track": "cubilia curae",
    "artist": "nec dui luctus",
    "album": "duis bibendum",
    "id": 21
  }, {
    "track": "habitasse platea dictumst",
    "artist": "dolor quis odio",
    "album": "sapien a libero nam dui",
    "id": 22
  }, {
    "track": "et ultrices",
    "artist": "suscipit ligula",
    "album": "diam in magna bibendum imperdiet",
    "id": 23
  }, {
    "track": "aliquam quis",
    "artist": "vestibulum ante ipsum primis in",
    "album": "urna pretium nisl",
    "id": 24
  }, {
    "track": "maecenas tristique",
    "artist": "bibendum imperdiet nullam orci pede",
    "album": "a libero",
    "id": 25
  }, {
    "track": "magna bibendum imperdiet nullam",
    "artist": "in hac habitasse",
    "album": "amet cursus id turpis integer",
    "id": 26
  }, {
    "track": "habitasse platea dictumst aliquam augue",
    "artist": "ut suscipit a feugiat",
    "album": "mauris vulputate elementum nullam varius",
    "id": 27
  }, {
    "track": "ut tellus nulla ut",
    "artist": "lacus purus aliquet",
    "album": "nisl nunc nisl",
    "id": 28
  }, {
    "track": "pede lobortis ligula",
    "artist": "tempus sit",
    "album": "nisl nunc nisl duis",
    "id": 29
  }, {
    "track": "mi in",
    "artist": "nonummy integer non",
    "album": "nibh ligula",
    "id": 30
  }, {
    "track": "et magnis dis parturient",
    "artist": "egestas metus aenean fermentum donec",
    "album": "varius ut blandit non",
    "id": 31
  }, {
    "track": "lorem ipsum dolor sit",
    "artist": "nulla pede ullamcorper augue a",
    "album": "fusce posuere felis sed",
    "id": 32
  }, {
    "track": "nulla eget",
    "artist": "vulputate justo",
    "album": "orci nullam molestie nibh in",
    "id": 33
  }, {
    "track": "pede lobortis ligula sit",
    "artist": "ligula vehicula consequat",
    "album": "in ante",
    "id": 34
  }, {
    "track": "consequat morbi",
    "artist": "cursus urna ut tellus nulla",
    "album": "quis orci eget orci",
    "id": 35
  }, {
    "track": "luctus rutrum nulla",
    "artist": "quisque id",
    "album": "elementum eu",
    "id": 36
  }, {
    "track": "integer ac leo",
    "artist": "magna at nunc commodo placerat",
    "album": "cubilia curae nulla dapibus dolor",
    "id": 37
  }, {
    "track": "libero nam dui",
    "artist": "sapien ut nunc vestibulum",
    "album": "tortor id nulla",
    "id": 38
  }, {
    "track": "fringilla rhoncus mauris",
    "artist": "odio elementum eu interdum",
    "album": "ultrices mattis odio donec",
    "id": 39
  }, {
    "track": "diam neque vestibulum eget vulputate",
    "artist": "eu interdum",
    "album": "consequat lectus in",
    "id": 40
  }, {
    "track": "ut massa",
    "artist": "suspendisse potenti",
    "album": "integer ac neque duis",
    "id": 41
  }, {
    "track": "justo lacinia eget",
    "artist": "consequat in",
    "album": "arcu adipiscing molestie hendrerit at",
    "id": 42
  }, {
    "track": "mauris lacinia sapien quis libero",
    "artist": "neque vestibulum eget",
    "album": "est phasellus",
    "id": 43
  }, {
    "track": "sem praesent id massa",
    "artist": "quis justo maecenas",
    "album": "nulla justo aliquam quis turpis",
    "id": 44
  }, {
    "track": "facilisi cras non",
    "artist": "duis aliquam convallis nunc",
    "album": "massa id",
    "id": 45
  }, {
    "track": "sapien non mi integer ac",
    "artist": "praesent lectus vestibulum",
    "album": "curabitur convallis duis",
    "id": 46
  }, {
    "track": "donec quis orci",
    "artist": "ut rhoncus aliquet pulvinar",
    "album": "mattis pulvinar nulla",
    "id": 47
  }, {
    "track": "molestie nibh in lectus pellentesque",
    "artist": "ridiculus mus vivamus",
    "album": "tempor convallis nulla",
    "id": 48
  }, {
    "track": "duis at velit eu",
    "artist": "convallis duis consequat dui nec",
    "album": "ridiculus mus vivamus",
    "id": 49
  }, {
    "track": "neque duis bibendum morbi non",
    "artist": "condimentum neque sapien",
    "album": "felis ut at dolor",
    "id": 50
  }, {
    "track": "mauris eget massa",
    "artist": "sapien sapien",
    "album": "diam id",
    "id": 51
  }, {
    "track": "sapien placerat ante nulla",
    "artist": "at nunc",
    "album": "dui vel",
    "id": 52
  }, {
    "track": "vel sem sed",
    "artist": "vestibulum eget vulputate",
    "album": "auctor gravida sem",
    "id": 53
  }, {
    "track": "platea dictumst",
    "artist": "potenti nullam porttitor lacus",
    "album": "duis at velit eu",
    "id": 54
  }, {
    "track": "molestie nibh in",
    "artist": "convallis tortor risus",
    "album": "justo lacinia",
    "id": 55
  }, {
    "track": "ipsum dolor",
    "artist": "id mauris vulputate elementum nullam",
    "album": "cubilia curae donec pharetra magna",
    "id": 56
  }, {
    "track": "eu mi nulla ac",
    "artist": "curabitur convallis duis consequat dui",
    "album": "interdum mauris non ligula",
    "id": 57
  }, {
    "track": "platea dictumst morbi vestibulum",
    "artist": "venenatis non",
    "album": "eu mi nulla ac enim",
    "id": 58
  }, {
    "track": "ultrices enim lorem ipsum",
    "artist": "diam nam tristique tortor",
    "album": "lacinia nisi venenatis tristique",
    "id": 59
  }, {
    "track": "sed augue aliquam erat volutpat",
    "artist": "consectetuer adipiscing",
    "album": "praesent blandit nam nulla integer",
    "id": 60
  }, {
    "track": "et tempus",
    "artist": "dui nec nisi volutpat eleifend",
    "album": "mi sit amet",
    "id": 61
  }, {
    "track": "condimentum id luctus nec",
    "artist": "a pede posuere nonummy",
    "album": "sagittis nam congue",
    "id": 62
  }, {
    "track": "turpis sed",
    "artist": "vel augue vestibulum",
    "album": "aenean lectus pellentesque eget",
    "id": 63
  }, {
    "track": "in hac habitasse platea",
    "artist": "orci luctus et",
    "album": "enim leo rhoncus sed vestibulum",
    "id": 64
  }, {
    "track": "aliquet massa id lobortis",
    "artist": "dis parturient",
    "album": "mauris vulputate elementum nullam varius",
    "id": 65
  }, {
    "track": "erat fermentum",
    "artist": "lectus aliquam",
    "album": "mi in porttitor",
    "id": 66
  }, {
    "track": "orci pede venenatis non sodales",
    "artist": "sit amet sapien dignissim vestibulum",
    "album": "amet lobortis sapien",
    "id": 67
  }, {
    "track": "ipsum dolor sit amet",
    "artist": "pede ac",
    "album": "curae nulla dapibus dolor vel",
    "id": 68
  }, {
    "track": "volutpat eleifend donec",
    "artist": "fusce posuere felis sed lacus",
    "album": "sit amet eleifend",
    "id": 69
  }, {
    "track": "sagittis dui vel nisl duis",
    "artist": "turpis integer aliquet massa id",
    "album": "fusce lacus",
    "id": 70
  }, {
    "track": "nulla sed",
    "artist": "risus dapibus augue vel accumsan",
    "album": "nulla neque",
    "id": 71
  }, {
    "track": "nulla tempus vivamus",
    "artist": "in lacus",
    "album": "aliquet ultrices",
    "id": 72
  }, {
    "track": "diam id",
    "artist": "vitae nisl aenean lectus",
    "album": "nunc donec quis orci",
    "id": 73
  }, {
    "track": "morbi vestibulum velit id pretium",
    "artist": "ante vel ipsum praesent",
    "album": "in felis eu sapien",
    "id": 74
  }, {
    "track": "nec condimentum neque",
    "artist": "nulla sed accumsan",
    "album": "non mattis",
    "id": 75
  }, {
    "track": "nec sem",
    "artist": "donec vitae nisi",
    "album": "ut rhoncus aliquet pulvinar",
    "id": 76
  }, {
    "track": "consequat in",
    "artist": "proin interdum mauris",
    "album": "ante nulla justo",
    "id": 77
  }, {
    "track": "mattis odio donec vitae",
    "artist": "ipsum dolor sit amet consectetuer",
    "album": "dignissim vestibulum vestibulum ante",
    "id": 78
  }, {
    "track": "fermentum donec ut mauris",
    "artist": "mattis egestas metus aenean",
    "album": "lorem id ligula suspendisse ornare",
    "id": 79
  }, {
    "track": "sagittis dui vel",
    "artist": "mauris vulputate",
    "album": "leo odio",
    "id": 80
  }, {
    "track": "morbi ut odio cras",
    "artist": "in tempus sit amet",
    "album": "quam suspendisse potenti nullam porttitor",
    "id": 81
  }, {
    "track": "porttitor id consequat",
    "artist": "a nibh",
    "album": "tristique in tempus sit amet",
    "id": 82
  }, {
    "track": "sollicitudin ut suscipit a feugiat",
    "artist": "risus dapibus augue vel",
    "album": "lobortis convallis tortor",
    "id": 83
  }, {
    "track": "lacus morbi sem mauris laoreet",
    "artist": "turpis sed ante",
    "album": "nonummy maecenas tincidunt lacus at",
    "id": 84
  }, {
    "track": "aliquam convallis nunc proin",
    "artist": "nec molestie sed justo pellentesque",
    "album": "ipsum praesent",
    "id": 85
  }, {
    "track": "tempus sit amet sem",
    "artist": "nec euismod scelerisque quam",
    "album": "lacus curabitur at",
    "id": 86
  }, {
    "track": "cum sociis",
    "artist": "odio in hac",
    "album": "nullam molestie nibh in",
    "id": 87
  }, {
    "track": "luctus et ultrices posuere cubilia",
    "artist": "congue risus",
    "album": "ac nibh fusce lacus",
    "id": 88
  }, {
    "track": "vestibulum ante ipsum",
    "artist": "praesent blandit",
    "album": "mattis pulvinar nulla",
    "id": 89
  }, {
    "track": "vehicula condimentum curabitur in libero",
    "artist": "venenatis lacinia aenean sit amet",
    "album": "faucibus orci luctus et ultrices",
    "id": 90
  }, {
    "track": "sit amet",
    "artist": "quam nec dui luctus",
    "album": "nam congue risus semper porta",
    "id": 91
  }, {
    "track": "luctus et ultrices posuere",
    "artist": "duis aliquam convallis nunc",
    "album": "mi sit amet lobortis",
    "id": 92
  }, {
    "track": "nulla justo aliquam quis",
    "artist": "sollicitudin vitae consectetuer eget rutrum",
    "album": "curabitur gravida nisi at nibh",
    "id": 93
  }, {
    "track": "primis in faucibus",
    "artist": "dictumst maecenas",
    "album": "nullam molestie nibh in lectus",
    "id": 94
  }, {
    "track": "aliquam lacus morbi quis",
    "artist": "curabitur convallis duis consequat",
    "album": "donec odio justo sollicitudin ut",
    "id": 95
  }, {
    "track": "sit amet lobortis sapien sapien",
    "artist": "metus arcu adipiscing molestie",
    "album": "montes nascetur ridiculus mus",
    "id": 96
  }, {
    "track": "facilisi cras non",
    "artist": "in congue etiam justo",
    "album": "id pretium iaculis diam",
    "id": 97
  }, {
    "track": "lacinia aenean sit",
    "artist": "erat volutpat in congue",
    "album": "amet sem fusce",
    "id": 98
  }, {
    "track": "eget orci vehicula condimentum curabitur",
    "artist": "diam erat",
    "album": "a ipsum integer a nibh",
    "id": 99
  }, {
    "track": "pede malesuada",
    "artist": "ultrices mattis odio donec vitae",
    "album": "curae nulla dapibus",
    "id": 100
  }]
export default function App() {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState([]);
  const [playListName, setPlayListName] = useState('Playlist Name');
  const onSubmit = (e) => { 
    setQuery(inputValue);
    e.preventDefault();
  };
  const onAdd = (track) => {
    setSelected([...selected, track]);
  };
  const onRemove = (track) => {
    setSelected(selected.filter((t) => t.id!== track.id));
  };
  const handlePlayListNameChange = (e) => {
    setPlayListName(e.target.value);
  };
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSubmit={onSubmit} value={inputValue} setInputValue={setInputValue}/>
      <div className="lists">
        <SearchResults tracks={tracks} query={query} onAdd={onAdd}/>
        <Playlist selected={selected} onRemove={onRemove} playListName={playListName} handlePlayListNameChange={handlePlayListNameChange}/>
      </div>
    </div>
  );
}

function SearchBar({onSubmit, value, setInputValue}) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input type="text" placeholder='Search...' value={value} onChange={(e)=>setInputValue(e.target.value)}/>
      <button type='submit'>Search</button>
    </form>
  );
}

function SearchResults({tracks, query, onAdd}) {
  let filteredTracks = query ? tracks.filter((track) => track.track.toLowerCase().includes(query)) : []
  console.log({filteredTracks, query})
  return (
    <div className="search-results">
      {filteredTracks.map((track) => 
      (<>
        <div key={track.id}>
          <h3>{track.track}</h3>
          <h4>{track.artist} | {track.album}</h4>
        </div>
        <button onClick={() => onAdd(track)}>+</button>
        </>
      ))}
    </div>
  )
}

function Playlist({selected, onRemove, playListName, handlePlayListNameChange}) {

  return (
    <>
    <div className="playlist">
      <input type='text' placeholder='Playlist Title'  value={playListName} onChange={handlePlayListNameChange}/>
    </div>
    <div>
      {selected.map((track) => (
        <div key={track.id}>
          <h3>{track.track}</h3>
          <h4>{track.artist} | {track.album}</h4>
          <button onClick={() => onRemove(track)}>-</button>
        </div>
        ))}
    </div>
    <div>
      <button type='submit' >Save to Spotify</button>
    </div>
    </>
  );
}