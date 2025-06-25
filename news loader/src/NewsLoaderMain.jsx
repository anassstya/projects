import React, { useEffect } from "react";
import './NewsLoading.css';
import { useDispatch, useSelector } from "react-redux";
import {fetchNewsRequest} from "./store/newsSlice.js";

function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export default function NewsLoaderMain() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.news?.items);
    const loading = useSelector((state) => state.news?.loading);
    const error = useSelector((state) => state.news?.error);
    const hasMore = useSelector((state) => state.news?.hasMore);

    useEffect(() => {
        dispatch(fetchNewsRequest());
    }, [dispatch]);

    const loadNews = () => {
        dispatch(fetchNewsRequest());
    };

    return (
        <div className="mainContainerNews">
            <div className="newsContainer">
                <p className="newsTitle">Все новости</p>
                {loading && <p className="newsLoader">Загрузка...</p>}
                {error && <p className="newsError">Ошибка: {error}</p>}

                {items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.id} className="newsItem">
                            <p className="itemText">{decodeHtml(item.text)}</p>

                            {item.attachments?.map((att, i) => {
                                if (att.type === 'video') {
                                    return <img key={i} src={att.video.image?.[0]?.url} alt={att.video.title} className="itemImage" />
                                }
                                if (att.type === 'link') {
                                    return (
                                        <a key={i} href={att.link.url} target="_blank" className="itemLink" rel="noopener noreferrer">
                                            {att.link.title}
                                        </a>
                                    );
                                }
                                return null;
                            })}

                            <p className="itemFeedBack">👍 {item.likes?.count}   👁 {item.views?.count}</p>
                        </div>
                    ))
                ) : (
                    !loading && <p>Нет новостей</p>
                )}
            </div>

            <button onClick={loadNews} className="newsBtn">load more</button>
        </div>
    );
}
