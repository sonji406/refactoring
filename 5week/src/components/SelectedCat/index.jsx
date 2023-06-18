export default function SelectedCat({selectedCatList}) {
    return (
        <div className="selected-cat">
            {
                selectedCatList.length !== 0 ? (
                    <img src={selectedCatList[0].url} />
                ) : (
                    <p>선택된 고양이가 없습니다.</p>
                )
            }
        </div>
    );
}
