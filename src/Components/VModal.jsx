

function VModal({ video, onClose }) {
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <img className="object-cover" src={video.thumbnail} alt={video.title} />
        <p className="pt-3">{video.description}</p>
        <p className="pt-1 text-xs font-extralight">Abu Obaed Ashik</p>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default VModal;
