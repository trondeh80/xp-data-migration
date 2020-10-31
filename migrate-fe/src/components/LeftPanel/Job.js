export default function Job({ id, displayName = '' }) {
    return (
    <div className="job group bg-white hover:bg-blue-500">
        <div className="job-inner  group-hover:text-white">
            <button className="activate btn btn-blue">{ displayName}</button>
        </div>
    </div>
    );
}